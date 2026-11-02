let restartbtn = document.getElementById("restartbtn");

restartbtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "../CCT360 - Interactive Discovery/intro.index.html";
});