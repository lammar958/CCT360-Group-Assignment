let btn1 = document.getElementById("hangoutbtn");
let btn2 = document.getElementById("studybtn");

btn1.addEventListener("click", function () {
    localStorage.setItem("choice", "hangout");
    window.location.href = "../HangoutOption/index.html";
});

btn2.addEventListener("click", function () {
    localStorage.setItem("choice", "study");
    window.location.href = "../Library/index.html";
});