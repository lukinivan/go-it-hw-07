const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (evt) => {
  const value = evt.currentTarget.value.trim();
  outputEl.textContent = value || 'Anonymous';
});
