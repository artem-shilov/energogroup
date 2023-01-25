document.addEventListener('DOMContentLoaded', function () {
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
});



const form = document.querySelector('.form');
const popupForm = document.querySelector('.popup-form');
const formInputs = document.querySelectorAll('.input');
const popupInputs = document.querySelectorAll('.popup-input');
const popupCheckbox = document.querySelector('.checkbox-popup');
const checkbox = document.querySelector('.checkbox');
// const errorMessage = document.querySelectorAll('.error-message');
// const response = document.querySelector('.response');

form.addEventListener('submit', (e) => {
  const emptyInputs = Array.from(formInputs).filter((e) => e.value === '');
  // function showResponse() {
  //   response.classList.add('show');
  // }
  formInputs.forEach(function (e) {
    if (e.value === '' ) {
      e.parentNode.classList.add('error-input');
    } else {
      e.parentNode.classList.remove('error-input');
    }
  });

  if (!checkbox.checked) {
    checkbox.classList.add('error');
    e.preventDefault();
  } else {
    checkbox.classList.remove('error');
  }

  if (emptyInputs.length !== 0) {
    e.preventDefault();
  }
});

popupForm.addEventListener('submit', (e) => {
  const emptyInputs = Array.from(popupInputs).filter((e) => e.value === '');

  popupInputs.forEach(function (e) {
    if (e.value === '') {
      e.parentNode.classList.add('error');
    
    } else {
      e.parentNode.classList.remove('error');
    
    }
  });

  if (!popupCheckbox.checked) {
    popupCheckbox.classList.add('error');
    e.preventDefault();
  } else {
    popupCheckbox.classList.remove('error');
  }
  if (emptyInputs.length !== 0) {
    e.preventDefault();
  }
});

// form.forEach(
//   addEventListener('submit', (e) => {
//     const emptyInputs = Array.from(formInputs).filter((e) => e.value === '');

//     formInputs.forEach(function (e) {
//       if (e.value === '') {
//         e.parentNode.classList.add('error');
//       } else {
//         e.parentNode.classList.remove('error');
//       }
//     });

//     if (emptyInputs.length !== 0) {

//       e.preventDefault();
//     }
//     if(!popupCheckbox.checked){
//       popupCheckbox.classList.add('error')
//         e.preventDefault()
//     }else{
//       popupCheckbox.classList.remove('error')
//     }
//     if(!checkbox.checked){
//       checkbox.classList.add('error')
//         e.preventDefault()
//     }else{
//       checkbox.classList.remove('error')
//     }
//   }),
// );

