import $ from 'jquery';
import 'slick-carousel';
$('.objects-slider').slick({
  dots: false,
  focusOnSelect: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: document.querySelector('.btn-next'),
  prevArrow: document.querySelector('.btn-prev'),
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

