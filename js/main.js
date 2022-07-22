const form = document.querySelector('.header__form');
const input = form.querySelector('.header__input');

input.addEventListener('focus', function () {
  form.classList.add('header__form_active');
});

input.addEventListener('blur', function () {
  form.classList.remove('header__form_active');
});
