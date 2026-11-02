document.addEventListener("DOMContentLoaded", function () {

    let startBtn = document.getElementById("startButton");

    if (startBtn) {
        startBtn.addEventListener("click", function () {
            let choiceCount = parseInt(localStorage.getItem("choicesMade") || "0");
            localStorage.setItem("choicesMade", choiceCount + 1);
            window.location.href = "../index.html";
        });
    }

    let btn1 = document.getElementById("earlybtn");
    let btn2 = document.getElementById("latebtn");

    if (btn1) {
        btn1.addEventListener("click", function () {
            localStorage.setItem("morningChoice", "wakeup");
            window.location.href = "../Option1Wakeup/index.html";
        });
    }

    if (btn2) {
        btn2.addEventListener("click", function () {
            localStorage.setItem("morningChoice", "sleepin");
            window.location.href = "../Option2SleepIn/index.html";
        });
    }

    let openNotifBtn = document.getElementById("openNotifiBtn");

    if (openNotifBtn) {
        openNotifBtn.addEventListener("click", function () {
            localStorage.setItem("checkedNotif", "true");
            window.location.href = "page4.html";
        });
    }

    let decisionbtn = document.getElementById("decisionbtn");

    if (decisionbtn) {
        decisionbtn.addEventListener("click", function () {
            window.location.href = "../Decision/index.html";
        });
    }

});