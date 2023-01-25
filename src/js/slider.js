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

// $('.slick-dots li').html(
//   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="0.695068" y="0.452148" width="10.9004" height="10.9004" fill="#D8D8D8" />
//   </svg>,
// );
