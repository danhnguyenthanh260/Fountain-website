// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Redirect Functions
function redirectToRegister() {
  window.location.href = "./pages/register.html";
}

function redirectToLogin() {
  window.location.href = "./pages/login.html";
}
function redirectToHome() {
  window.location.href = "./pages/home.html";
}
