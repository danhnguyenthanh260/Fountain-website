// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Auto Sliding Categories
let categories = document.querySelector(".category-container");
let scrollAmount = 0;

function scrollCategories() {
  scrollAmount += 200;
  if (scrollAmount >= categories.scrollWidth) {
    scrollAmount = 0;
  }
  categories.scrollLeft = scrollAmount;
}

setInterval(scrollCategories, 2000);

function redirectToRegister() {
  window.location.href = "register.html";
}
function redirectToHome() {
  window.location.href = "home.html";
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
