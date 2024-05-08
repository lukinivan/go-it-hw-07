const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const colorBtnEl = document.querySelector('.change-color');

colorBtnEl.addEventListener('click', handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEl.style.color = `${getRandomHexColor()}`;
}
