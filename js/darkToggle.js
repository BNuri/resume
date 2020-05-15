"use strict";

var darkToggle = function darkToggle(event) {
  var body = document.body;
  var toggleBtn = event.target;
  body.classList.toggle("dark-mode");
  toggleBtn.className = body.className.includes("dark-mode") ? "fas fa-sun fa-lg" : "fas fa-moon fa-lg";
};

var darkBtn = document.getElementById("darkToggle");
if (darkBtn) {
  darkBtn.addEventListener("click", darkToggle);
}