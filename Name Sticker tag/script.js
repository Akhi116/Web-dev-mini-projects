let wrapper = document.getElementsByClassName("wrapper")[0];

let template = document.getElementsByTagName("template")[0];

let names = ["akhil", "prav", "jeev"];

let colors = [
  "red",
  "tomato",
  "green",
  "blue",
  "violet",
  "darkgreen",
  "darkviolet",
  "brown",
  "aqua",
  "bisque",
  "biege",
  "burlywood",
  "teal",
  "yellow",
  "pink",
];

let sticker = function (name) {
  let div = template.content.querySelector("div");
  let nameOfSticker = div.querySelector(".name");

  nameOfSticker.innerHTML = name;

  div.style.background = colors[Math.floor(Math.random() * colors.length)];

  div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

  let node = document.importNode(div, true);
  wrapper.appendChild(node);
};

setTimeout(refreshPage, 1000);
function refreshPage() {
  location.reload();
}

names.forEach(sticker);
