"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

const btnsShowModel = document.querySelectorAll(".show-modal");
console.log(btnsShowModel);

btnsShowModel.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});


