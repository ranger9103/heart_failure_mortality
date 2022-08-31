$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        makePredictions();
    });
});


// call Flask API endpoint
function makePredictions() {
    var aniongap = $("#aniongap").val();
    var bicarb = $("#bicarb").val();
    var lactate = $("#lactate").val();
    var leucocyte = $("#leucocyte").val();
    var urine = $("#urine").val();
<<<<<<< HEAD
    var rdw = $("#RDW").val();
    var inr = $("#inr").val();
    var comorbidities = $("#Comorbidities").val();
=======
    var RDW = $("#RDW").val();
    var inr = $("#inr").val();
    var Comorbidities = $("#Comorbidities").val();
>>>>>>> 35b380c9f5314a8fb23d136d0abb3b49e871a7a6
    var sbp = $("#sbp").val();
    var dbp = $("#dbp").val();


    // check if inputs are valid

    // create the payload
    var payload = {
<<<<<<< HEAD
        'Anion': aniongap,
        'Bicarb': bicarb,
        'Lactate': lactate,
        'Leucocyte': leucocyte,
        'Urine': urine,
        'rdw': rdw,
        'inr': inr,
        'comorbidities': comorbidities,
        'sbp': sbp,
        'dbp': dbp
=======
        "aniongap": aniongap,
        "bicarb": bicarb,
        "lactate": lactate,
        "leucocyte": leucocyte,
        "urine": urine,
        "RDW": RDW,
        "inr": inr,
        "Comorbidities": Comorbidities,
        "sbp": sbp,
        "dbp": dbp
>>>>>>> 35b380c9f5314a8fb23d136d0abb3b49e871a7a6
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

<<<<<<< HEAD
            if (returnedData["prediction"] == "0.0") {
                $("#output").text("Survival is likely.");
            } else if (returnedData["prediction"] == "1.0") {
                $("#output").text("Survival is unlikely.");
            } else {
                $("#output").text(returnedData["prediction"]);
=======
            if (returnedData["prediction"] === "1") {
                $("#output").text("Survival is likely.");
            } else {
                $("#output").text("Survival is unlikely.");
>>>>>>> 35b380c9f5314a8fb23d136d0abb3b49e871a7a6
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}