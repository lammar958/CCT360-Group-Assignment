// initalize variables to get buttons from html document
let btn1 = document.getElementById("earlybtn");
let btn2 = document.getElementById("latebtn");

// function to change page based on users decision
function decision(choice) {
    // if wake up early
    if (choice === "wakeup") {
        window.location.href = "Option1Wakeup/index.html";
    }

    // if sleep in
    else if (choice === "sleepin") {
        window.location.href = "Option2SleepIn/index.html";
    }
}

// if user clicks wake up
btn1.addEventListener("click", function () {
  decision("wakeup");
});

// if user clicks sleep in
btn2.addEventListener("click", function () {
    decision("sleepin");
});