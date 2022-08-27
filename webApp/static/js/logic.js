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
    var rdw = $("#RDW").val();
    var inr = $("#inr").val();
    var comorbidities = $("#Comorbidities").val();
    var sbp = $("#sbp").val();
    var dbp = $("#dbp").val();


    // check if inputs are valid

    // create the payload
    var payload = {
        "aniongap": aniongap,
        "bicarb": bicarb,
        "lactate": lactate,
        "leucocyte": leucocyte,
        "urine": urine,
        "RDW": rdw,
        "inr": inr,
        "Comorbidities": comorbidities,
        "sbp": sbp,
        "dbp": dbp
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

            if (returnedData["prediction"] === "0") {
                $("#output").text("Survival is likely.");
            } else {
                $("#output").text("Survival is unlikely.");
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}