document.addEventListener("DOMContentLoaded", function () {
  var count = 0;
  var displayNumber = document.getElementById("displayNumber");
  var incrementButton = document.getElementById("incrementButton");

  incrementButton.addEventListener("click", function () {
    count++;
    displayNumber.textContent = count;
  });
});
