const hero1 = document.querySelector('.hero');
const body1 = document.querySelector('body');

if (window.scrollY > window.innerHeight) {
  body1.style.backgroundSize = 0;
  hero1.style.opacity = 0;
}

if (window.scrollY < 100) {
  hero1.style.opacity = 1;
}
