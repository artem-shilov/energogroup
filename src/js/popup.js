const openPopup = document.querySelector('.block');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup-close');

const html = document.querySelector('html')
// openPopup.forEach((e) => {
//   e.addEventListener('click', (e) => {
//     let path = e.currentTarget.getAttribute('data-popup');
//     popup.style.display = 'block';
//   });
// });
function closePopup() {
  popup.classList.remove('popup-open');
  html.classList.remove('off-scroll');
}

openPopup.addEventListener('click', () => {
  // let path = e.currentTarget.getAttribute('data-popup');

  popup.classList.add('popup-open');
  html.classList.add('off-scroll');
});

btnClose.addEventListener('click', () => {
  closePopup();

});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    closePopup();
  }
});
