import Toastify from 'toastify-js';

export const addToast = () => {
  const btns = document.querySelectorAll('.js-tost-test');

  const test = Toastify({
    text: 'This is a test toast from an NPM module and it works fine',
    duration: 5000,
    gravity: 'bottom',
    close: true,
  });

  btns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', () => test.showToast());
  });
};
