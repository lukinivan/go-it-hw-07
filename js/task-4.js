const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '')
    return alert('All form fields must be filled in');

  console.log({ email: email, password: password });
  form.reset();
}
