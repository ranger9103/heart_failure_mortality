from sunau import AUDIO_FILE_ENCODING_ADPCM_G721
from flask import Flask, render_template, redirect, request, jsonify
from modelHelper import ModelHelper

# Create an instance of Flask
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

modelHelper = ModelHelper()

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")

@app.route("/makePredictions", methods=["POST"])
def make_predictions():
    content = request.json["data"]
    print(content)
    
    # parse
    RDW = float(content['rdw'])
    Urine_output = float(content['Urine'])
    Comorbidities = int(content['comorbidities'])
    Leucocyte = float(content['Leucocyte'])
    Anion_gap = float(content['Anion'])
    Bicarbonate = float(content['Bicarb'])
    Lactic_acid = float(content['Lactate'])
    INR = float(content['inr'])
    Systolic_blood_pressure = float(content['sbp'])
    Diastolic_blood_pressure = float(content['dbp'])

    preds = modelHelper.makePredictions(Anion_gap, Bicarbonate, Lactic_acid, Leucocyte,
       Urine_output, RDW, INR, Comorbidities,
       Systolic_blood_pressure, Diastolic_blood_pressure)
    return(jsonify({"ok": True, "prediction": str(preds)}))


#############################################################

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

#main
if __name__ == "__main__":
    app.run(debug=True)
