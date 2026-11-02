let task1 = document.getElementById("task1");
let task2 = document.getElementById("task2");
let task3 = document.getElementById("task3");

let submitbtn = document.getElementById("submitbtn");
let restartbtn = document.getElementById("restartbtn");

function checkProgress() {
    let completed = 0;

    if (task1.checked) {
        completed = completed + 1;
    }

    if (task2.checked) {
        completed = completed + 1;
    }

    if (task3.checked) {
        completed = completed + 1;
    }

    document.getElementById("progress").innerHTML =
        completed + " out of 3 tasks completed!";
}

task1.addEventListener("change", checkProgress);
task2.addEventListener("change", checkProgress);
task3.addEventListener("change", checkProgress);

submitbtn.addEventListener("click", function () {

    if (task1.checked && task2.checked && task3.checked) {
        document.getElementById("message").innerHTML =
            "10:45 pm - Congratulations! You submitted your assignment on time! Your decision to study paid off!";

        document.getElementById("ending").style.backgroundColor =
            "rgb(255, 235, 164)";

        localStorage.setItem("ending", "success");
    }

    else {
        document.getElementById("message").innerHTML =
            "You still have tasks to finish before submitting!";
    }
});

restartbtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "../CCT360 - Interactive Discovery/intro.index.html";
});