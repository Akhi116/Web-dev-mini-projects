let colorSelector = document.querySelector('.js-bg-color-selector');
const inputArea = document.querySelector('.js-input-area');
    
document.body.style.backgroundColor = colorSelector.value;
inputArea.value = colorSelector.value;

colorSelector.addEventListener('change', () => {
  let bgColor = colorSelector.value;

  document.body.style.backgroundColor = bgColor;

  inputArea.value = bgColor;
});
