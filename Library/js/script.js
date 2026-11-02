let task = "";
let finished = false;

let researchbtn = document.getElementById("researchbtn");
let writingbtn = document.getElementById("writingbtn");
let studybtn = document.getElementById("studybtn");
let homebtn = document.getElementById("homebtn");

researchbtn.addEventListener("click", function () {
    task = "research";
    finished = false;

    document.getElementById("taskimage").src = "images/research.jpg";
    document.getElementById("message").innerHTML =
        "You decided to start with research!";
});

writingbtn.addEventListener("click", function () {
    task = "writing";
    finished = false;

    document.getElementById("taskimage").src = "images/writing.jpg";
    document.getElementById("message").innerHTML =
        "You decided to start with writing!";
});

studybtn.addEventListener("click", function () {

    if (task === "") {
        document.getElementById("message").innerHTML =
            "Choose research or writing first!";
    }

    else {
        finished = true;

        document.getElementById("taskimage").src = "images/studying.jpg";
        document.getElementById("message").innerHTML =
            "You made great progress on your assignment!";
    }
});


homebtn.addEventListener("click", function () {
    if (finished === false) {
        document.getElementById("message").innerHTML =
            "You need to study before heading home!";
    }
    else {
        localStorage.setItem("studied", "yes");
        window.location.href = "../Ending2/index.html";
    }
});