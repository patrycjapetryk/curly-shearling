const scrollCarousel = document.querySelectorAll('.scroll-carousel-with-arrows--js');

const scroll = (item) => {
  const leftArrow = item.querySelector('.arrows__arrow--left-js');
  const rightArrow = item.querySelector('.arrows__arrow--right-js');
  const carousel = item.querySelector('.scroll-carousel-with-arrows__wrapper--js');
  const carouselItem = item.querySelector('.scroll-carousel-with-arrows__item--js');
  const scrollDistance = carouselItem.offsetWidth;

  const scrollRight = () => {
    carousel.scrollBy(scrollDistance, 0);
  };

  const scrollLeft = () => {
    carousel.scrollBy(-scrollDistance, 0);
  };

  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);
};

scrollCarousel.forEach((item) => {
  scroll(item);
});
