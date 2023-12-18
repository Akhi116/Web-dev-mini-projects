const offBtn = document.querySelector('.js-off-btn');
const onBtn = document.querySelector('.js-on-btn');

const container1 = document.querySelectorAll('.red');
const container2 = document.querySelectorAll('.green');
const container3 = document.querySelectorAll('.blue');

lightOff();

offBtn.addEventListener('click', () => {
  lightOff();
});

onBtn.addEventListener('click', () => {
  lightOn();
});

function lightOn(){
  container1.forEach((link) => {
    link.classList.add('red');
  });

  container2.forEach((link) => {
    link.classList.add('green');
  });

  container3.forEach((link) => {
    link.classList.add('blue');
  });
}

function lightOff(){

  container1.forEach((link) => {
    link.classList.remove('red');
  });

  container2.forEach((link) => {
    link.classList.remove('green');
  });

  container3.forEach((link) => {
    link.classList.remove('blue');
  });

}