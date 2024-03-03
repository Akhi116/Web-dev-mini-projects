const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
// const activateDot = document.querySelectorAll(".dot");
let currSlide = 0;
let maxSlide = slides.length;

const gotoSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${120 * (i - slide)}%)`;
  });
};

const prevSlide = () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }

  gotoSlide(currSlide);
};

const nextSlide = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  gotoSlide(currSlide);
};

gotoSlide(0);

btnLeft.addEventListener("click", prevSlide);

btnRight.addEventListener("click", nextSlide);

// if()
