const timeline = document.getElementById("timeline");
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const circles = document.querySelectorAll(".circle");

let step = 1;

function mainCode() {
  circles.forEach((c, i) => {
    if (i < step) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  timeline.style.width = `
      ${((actives.length - 1) / (circles.length - 1)) * 100}%
  `;

  if (step === 1) {
    prev.disabled = true;
  } else if (step === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

next.addEventListener("click", () => {
  step++;
  if (step > circles.length) {
    step = circles.length;
  }
  mainCode();
});

prev.addEventListener("click", () => {
  step--;
  if (step < 1) {
    step = 1;
  }
  mainCode();
});
