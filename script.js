const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navList = document.querySelector(".main-nav");
const navListItem = document.querySelectorAll(".list-item");

function addClass() {
  navList.classList.add("active");
  hamburgerIcon.classList.add("active");
  closeIcon.classList.add("active");
}

function removeClass() {
  navList.classList.remove("active");
  hamburgerIcon.classList.remove("active");
  closeIcon.classList.remove("active");
}

hamburgerIcon.addEventListener("click", addClass);

closeIcon.addEventListener("click", removeClass);

navListItem.forEach((item) => item.addEventListener("click", removeClass));
