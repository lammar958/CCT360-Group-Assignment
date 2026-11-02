// change to the next page when user clicks the button
document.getElementById("btn1").addEventListener("click", function () {
  // alert user they opened the door and change to the next page
  alert("You have opened the door! You can enter the house now!");
  window.location.href = "../Ending1/index.html";
});
