// initalize variable
let drink = "";

// set the value of the drink to what user selects
function drinkFunction(item) {
    drink = item;
}

function orderFunction() {
    // if any of the options are not selected, alert the user
    if (drink === "") {
        alert("Please select an option before placing your order.");
    } else {
    // alert the user with their order if they have choosed an option
        alert("You have ordered a " + drink + ". Thanks for ordering!");
        drink = "";
    }
}

// CHANGE TO FOLDER NAME
// Change page when user clicks button
document.getElementById("btn1").addEventListener("click", function () {
    window.location.href = "../CCT360 - Interactive Discovery/page3.html";
});