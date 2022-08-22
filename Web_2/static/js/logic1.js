$(document).ready(function() {
    console.log("PUrine_output Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        makePredictions();
    });
});


// call Flask API endpoint
function makePredictions() {
    var BMI = $("#gender").val();
    var Urine_output = $("#Urine_output").val();
    var RDW = $("#RDW").val();
    var Leucocyte = $("#Leucocyte").val();
    var Lymphocyte = $("#Lymphocyte").val();
    var Urea_nitrogen = $("#Urea_nitrogen").val();


    // check if inputs are valid

    // create the payload
    var payload = {
        "BMI": BMI,
        "Urine_output": Urine_output,
        "RDW": RDW,
        "Leucocyte": Leucocyte,
        "Lymphocyte": Lymphocyte,
        "Urea_nitrogen": Urea_nitrogen
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

            if (returnedData["prediction"] === "1") {
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