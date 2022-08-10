from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
mongo = PyMongo(app, uri = "mongodb://localhost:27017/mars_app")

@app.route("/")
def home():
   mars_data = mongo.db.mars.find_one()
   return render_template("index.html", mars=mars_data)

   if __name__ == "__main__":
    app.run(debug=True)