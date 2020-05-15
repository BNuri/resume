const darkToggle = (event) => {
  const body = document.body;
  const toggleBtn = event.target;
  body.classList.toggle("dark-mode");
  toggleBtn.className =
    body.className.indexOf("dark-mode") > 0
      ? "fas fa-sun fa-lg"
      : "fas fa-moon fa-lg";
};

const darkBtn = document.getElementById("darkToggle");
if (darkBtn) {
  darkBtn.addEventListener("click", darkToggle);
}
