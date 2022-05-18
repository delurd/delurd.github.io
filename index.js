const hero = document.querySelector('#overlay');
const img = document.querySelector('.hero #imgProfile');
const profileBg = document.querySelector('#imgProfileBg');
const hOne = document.querySelector('.hero h1');
const about = document.querySelector('.hero .about');
hero.addEventListener('mousemove', async (e) => {
  const offX = e.offsetX - hero.offsetWidth / 2;
  const offY = e.offsetY - hero.offsetHeight / 2;
  img.style.transform = `translate(${-offX / 50}px,${-offY / 50}px`;
  profileBg.style.transform = `translate(${-offX / 35}px,${-offY / 35}px`;
  hOne.style.transform = `translate(${-offX / 15}px,${-offY / 15}px`;
  about.style.transform = `translate(${-offX / 35}px,${-offY / 10}px`;
});
