document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let isDragging = false;
  let startX, scrollLeft;

  // Kéo chuột để cuộn
  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ kéo
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  // Nút điều hướng
  nextBtn.addEventListener("click", () => {
    carousel.scrollLeft += carousel.offsetWidth / 2;
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth / 2;
  });

  // Cuộn bằng chuột giữa (wheel)
  carousel.addEventListener("wheel", (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY * 2;
  });
});
