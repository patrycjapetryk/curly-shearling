const scrollAnimationItems = document.querySelectorAll('.animation-on-scroll--js');
const animationStartDistance = 0;
const animationStartClassName = 'animation-on-scroll--before';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animationOnScroll = () => {
  scrollAnimationItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    item.style.transitionDelay = `0.${getRandomNumber(0, 5)}s`;

    if (
      itemTop - windowHeight < 0 - animationStartDistance &&
      itemBottom > animationStartDistance
    ) {
      item.classList.remove(animationStartClassName);
    } else {
      item.classList.add(animationStartClassName);
    }
  });
};

window.addEventListener('scroll', animationOnScroll);
window.addEventListener('load', animationOnScroll);
window.addEventListener('resize', animationOnScroll);
