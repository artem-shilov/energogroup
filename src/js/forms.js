const form = document.querySelector('.form');
const responseError = document.querySelector('.response__error');
const tryAgain = document.querySelector('.try__again');
const responseSuccess = document.querySelector('.response__success');


// for (let form of forms) {
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    console.log(...formData)
    if (error === 0) {
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        responseSuccess.classList.add('show');
      } else {
    
        form.classList.add('hide');
        responseError.classList.add('show');
        form.reset();

        tryAgain.addEventListener('click', () => {
          form.classList.remove('hide');
          responseError.classList.remove('show');
        });
      }
    }
  }

  function formValidate(form) {
    // form.preventDefault()
    let error = 0;
    let formReq = form.querySelectorAll('.req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
// }

function formAddError(input) {
  input.parentElement.classList.add('error');
  input.classList.add('error');
}
function formRemoveError(input) {
  input.parentElement.classList.remove('error');
  input.classList.remove('error');
}


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


