"use strict";

var darkToggle = function darkToggle(event) {
  event.preventDefault();
  var body = document.body;
  var toggleBtn = event.target;
  body.classList.toggle("dark-mode");
  toggleBtn.className = body.className.indexOf("dark-mode") > 0 ? "fas fa-sun fa-lg" : "fas fa-moon fa-lg";
};

var darkBtn = document.getElementById("darkToggle");
if (darkBtn) {
  darkBtn.addEventListener("click", darkToggle);
}