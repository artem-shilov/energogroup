const item = document.querySelectorAll('.activity__list-item');
const btnClose = document.querySelectorAll('.popup-close');
const header = document.querySelector('.header');
const html = document.querySelector('html');

item.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    const popup = document.querySelector(`[data-target = '${path}']`);

    function closePopup() {
      popup.classList.remove('popup-open');
      html.classList.remove('off-scroll');
      header.style.display = 'block';
    }

    popup.classList.add('popup-open');
    html.classList.add('off-scroll');
    header.style.display = 'none';

    btnClose.forEach((e) => {
      e.addEventListener('click', () => {
        closePopup();
      });
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
  });
});
