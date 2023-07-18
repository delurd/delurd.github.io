const hero1 = document.querySelector('.hero');
const body1 = document.querySelector('body');
const backgroundImage1 = document.querySelector('#bg-image');


if (window.scrollY > window.innerHeight) {
  body1.style.backgroundSize = 0;
  hero1.style.opacity = 0;
  backgroundImage1.style.scale = 0;
}

if (window.scrollY < 100) {
  hero1.style.opacity = 1;
}


window.scrollY > window.innerHeight / 2
? (arrow.style.rotate = '180deg')
: (arrow.style.rotate = '0deg');