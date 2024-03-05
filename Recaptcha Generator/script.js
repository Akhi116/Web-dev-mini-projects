const recaptcha = document.querySelector(".js-recaptcha");
const inputValue = document.querySelector(".js-input");
const result = document.querySelector(".js-result");
const refresh = document.querySelector(".js-refresh");
const check = document.querySelector(".js-check");

generateRecaptcha();

function generateRecaptcha() {
  const info = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let captchaLength = 6;
  let captcha = "";

  for (let i = 0; i < captchaLength; i++) {
    const randomIndex = Math.floor(Math.random() * info.length) + 1;
    captcha += info.charAt(randomIndex);
  }
  recaptcha.innerHTML = captcha;
  inputValue.value = "";
  result.innerHTML = "";
}

refresh.addEventListener("click", () => {
  generateRecaptcha();
});

function checkRecaptcha() {
  const userCaptcha = inputValue.value;
  const captcha = recaptcha.innerHTML;
  if (userCaptcha === captcha) {
    result.innerHTML = "Captcha is Correct!!";
  } else {
    result.innerHTML = "Incorrect Captcha!!";
  }
}

check.addEventListener("click", () => {
  checkRecaptcha();
});
