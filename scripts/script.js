let currentIndex = 0;
const images = [
  "assets/giyuu.png",
  "assets/shinobu.png",
  "assets/rengoku.png",
  "assets/mitsuri.png",
  "assets/obanai.png",
  "assets/sanemi.png",
  "assets/gyomei.png",
  "assets/uzui.png",
  "assets/muichiro.png"
]; 

function openModal(cardElement) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalDescription = document.getElementById("modal-description");

  const imgSrc = cardElement.querySelector("img").src;
  const characterName = cardElement.querySelector(".character-name").textContent;
  const characterDescription = cardElement.querySelector(".character-description").textContent;

  currentIndex = images.indexOf(imgSrc);

  modalImg.src = imgSrc;
  modalName.textContent = characterName;
  modalDescription.textContent = characterDescription;

  modal.style.display = "flex";

  modal.removeEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("close")) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; 
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  const newImgSrc = images[currentIndex];
  console.log('Changing to image:', newImgSrc);

  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalDescription = document.getElementById("modal-description");

  const cardElement = document.querySelector(`img[src="${newImgSrc}"]`).parentElement;
  const characterName = cardElement.querySelector(".character-name").textContent;
  const characterDescription = cardElement.querySelector(".character-description").textContent;

  modalImg.src = newImgSrc;
  modalName.textContent = characterName;
  modalDescription.textContent = characterDescription;
}

