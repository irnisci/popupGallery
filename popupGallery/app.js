const smallImg = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const modal = document.querySelector(".modal");
console.log(fullImg);

smallImg.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    fullImg.classList.add("open");

    const originalQuallity = img.getAttribute("alt");
    fullImg.src = `img Kopie/full/${originalQuallity}.jpg`;
  });
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
