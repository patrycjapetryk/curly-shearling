const background = document.querySelector('.background--js');

const backgroundAnimation = () => {
  const opacityValue = () => {
    let opacity = 1 - 0.0001 * window.scrollY;

    if (opacity > 1) {
      opacity = 0.7;
    } else if (opacity < 0.4) {
      opacity = 0.3;
    }

    return opacity;
  };

  background.style.opacity = opacityValue();
};

document.addEventListener('scroll', backgroundAnimation);
window.addEventListener('resize', backgroundAnimation);
window.addEventListener('load', backgroundAnimation);
