const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

console.log(searchInput);
console.log(searchButton);
searchButton.addEventListener("touchstart", () => {
  searchInput.focus();
});

searchButton.addEventListener("mousedown", () => {
  searchInput.focus();
});
