// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
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
