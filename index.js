const hero = document.querySelector('.hero');
const img = document.querySelector('.hero #imgProfile');
const profileBg = document.querySelector('#imgProfileBg');
const hOne = document.querySelector('.hero h1');
const about = document.querySelector('.hero .about');
hero.addEventListener('mousemove', async (e) => {
  const offX = e.pageX - hero.offsetWidth / 2;
  const offY = e.pageY - hero.offsetHeight / 2;
  img.style.transform = `translate(${-offX / 50}px,${-offY / 50}px`;
  profileBg.style.transform = `translate(${-offX / 35}px,${-offY / 35}px`;
  hOne.style.transform = `translate(${-offX / 15}px,${-offY / 15}px`;
  about.style.transform = `translate(${-offX / 35}px,${-offY / 10}px`;
});

//MENU BUTTON

const menu = document.querySelector('.menu-btn');
menu.dataset.toggle = 'true';
menu.addEventListener('click', function () {
  const menuItem = document.querySelectorAll('.menu-btn div');

  if (this.dataset.toggle == 'true') {
    this.dataset.toggle = 'false';

    menuItem.forEach((item, index) => {
      if (index == 0) {
        item.style.transform = `translate(0, 10px)`;
      }
      if (index == 2) {
        item.style.transform = `translate(0, -10px)`;
      }
    });
    menu.classList.add('menu-cliked');
  } else {
    this.dataset.toggle = 'true';

    menuItem.forEach((item) => {
      item.style.transform = `translate(0,0)`;
    });
    menu.classList.remove('menu-cliked');
  }
});
