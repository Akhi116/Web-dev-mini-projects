const btnElememt = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');

function textToSpeech() {
  const inputValue = inputElement.value;

  if (inputValue.trim() !== '') {
    const utterSpeech = new SpeechSynthesisUtterance(inputValue);
    speechSynthesis.speak(utterSpeech);
  } else {
    alert('Please Enter text to speech!!');
  }

}

btnElememt.addEventListener('click', () => {
  textToSpeech();
});

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    textToSpeech();
  }
})