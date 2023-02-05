import Inputmask from 'inputmask';

// window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  // const popupForm1 = document.getElementById('popup-form1');
  // popupForm1.addEventListener('submit', formValidator);
  // const popupForm2 = document.getElementById('popup-form2');
  // popupForm2.addEventListener('submit', formValidator);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidator(form);
    let formData = new FormData(form);
    if (error === 0) {
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message)
        form.reset();
      } else {
        alert('ошибка');
      }
    }
    }
  // }
  function formValidator(e) {
    const formInputs = form.querySelectorAll('input');
    const checkbox = form.querySelector('input[type="checkbox"]');

    // const emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

    formInputs.forEach(function (e) {
      if (e.value === '') {
        e.parentNode.classList.add('error');
      } else {
        e.parentNode.classList.remove('error');
      }
    });

    // if (emptyInputs.length !== 0) {
    //   e.preventDefault();
    // }

    if (!checkbox.checked) {
      checkbox.classList.add('error');
      // e.preventDefault();
    } else {
      checkbox.classList.remove('error');
    }
  }

  const telSelector = document.querySelectorAll('input[type="tel"]');
  const inputMask = new Inputmask('+7(999) 999-99-99');
  inputMask.mask(telSelector);

  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = '+7(___) ___-__-__',
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = e.target.value.replace(/\D/g, '');
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
// });
