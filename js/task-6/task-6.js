const inputNumEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', handleCreate);
destroyBtnEl.addEventListener('click', handleDestroy);

function createBoxes(amount) {
  let markup = '';
  let count = 30;
  let color = '';

  for (let i = 0; i < amount; i++) {
    color = getRandomHexColor();
    count += 10;
    markup += `<div id="box" 
    style="width:${count}px; height:${count}px; background-color:${color}"
    ></div>`;
  }
  boxesEl.innerHTML = markup;
}

function handleCreate() {
  boxesEl.innerHTML = '';
  const amount = Number(inputNumEl.value);
  amount > 0 && amount <= 100
    ? createBoxes(amount)
    : alert('Please enter a number between 1 and 100.');
}

function handleDestroy() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
