const form = document.querySelectorAll('.form');
const formInputs = document.querySelectorAll('.input');

form.forEach(
  addEventListener('submit', (e) => {
    const emptyInputs = Array.from(formInputs).filter((e) => e.value === '');

    formInputs.forEach(function (e) {
      if (e.value === '') {
        e.parentNode.classList.add('error');
      } else {
        e.parentNode.classList.remove('error');
      }
    });

    if (emptyInputs.length !== 0) {
      e.preventDefault();
    }
  }),
);
