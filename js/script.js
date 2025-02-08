// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Redirect Functions
function redirectToRegister() {
  window.location.href = "register.html";
}

function redirectToLogin() {
  window.location.href = "login.html";
}
function redirectToHome() {
  window.location.href = "index.html";
}

function redirectToCourses() {
  window.location.href = "courses.html";
}

function redirectToInstructors() {
  window.location.href = "instructors.html";
}

function redirectToSchedules() {
  window.location.href = "schedules.html";
}

function redirectToContact() {
  window.location.href = "contact.html";
}
