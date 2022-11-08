const hero = document.querySelector('.hero');
const img = document.querySelector('.hero #imgProfile');
const profileBg = document.querySelector('#imgProfileBg');
const hOne = document.querySelector('.hero h1');
const about = document.querySelector('.hero .about');

const mouseMoveObject = document.querySelectorAll('.mouse-move');

window.addEventListener('mousemove', async (e) => {

  const offX = e.screenX - window.innerWidth / 2;
  const offY = e.screenY - window.innerHeight / 2;
  img.style.transform = `translate(${-offX / 50}px,${-offY / 50}px`;
  profileBg.style.transform = `translate(${-offX / 35}px,${-offY / 35}px`;
  hOne.style.transform = `translate(${-offX / 15}px,${-offY / 15}px`;
  about.style.transform = `translate(${-offX / 35}px,${-offY / 10}px`;


});


// Background onScroll

const body = document.querySelector('body');
const bodyStyle = window.getComputedStyle(body);
body.style.backgroundSize = `${bodyStyle.backgroundSize}`;
if (window.scrollY > window.innerHeight) {
  body.style.backgroundSize = `${bodyStyle.backgroundSize}`;
}
const arrBgSize = body.style.backgroundSize.split('p');


window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  let bgSize = (parseFloat(arrBgSize[0]) - scrollValue * 2);

  body.style.backgroundSize = `${bgSize < 0 ? 0 : bgSize}px`;

})



// Scroll Follow
const object = document.querySelectorAll('.scrl-obj');

window.addEventListener('scroll', scrollEffect);

function scrollEffect() {
  object.forEach(object => {
    let dataScroll = object.getAttribute('data-scrl-spd')
    let dataX = object.getAttribute('data-x')
    let dataY = object.getAttribute('data-y')

    if (dataScroll == null) { dataScroll = 3.5 }
    if (dataX == null) { dataX = 0 }
    if (dataY == null) { dataY = 0 }

    object.style.transform = `translate(${dataX}px, ${(-((window.scrollY + Math.floor(window.innerHeight / 2)) - (object.offsetTop + object.scrollHeight / 2)) / dataScroll)}px)`;
  })

}

//GSAP DRAGABLE
const slideBox = document.querySelector('.content');

function dragg() {
  Draggable.create(".content", {
    type: "x",
    // bounds: ".container",
    edgeResistance: 0.95,
    // ondrag : lapposeh(),
    bounds: { left: -slideBox.scrollWidth + window.innerWidth, width: (slideBox.scrollWidth) },
  });
}

dragg()
window.addEventListener('resize', () => { dragg() });



// CURSOR CUSTOM DRAG 
const area = document.querySelector('.content');
const cursorCircle = document.querySelector('.cursor-circle');


let boxWidth = area.scrollWidth;
let boxHeight = area.scrollHeight;

window.addEventListener('mousemove', function (e) {
  const offTop = area.offsetTop;
  const offLeft = area.getBoundingClientRect().left;
  const offX = e.pageX;
  const offY = e.pageY;

  const centerCursor = cursorCircle.scrollWidth / 2;

  cursorCircle.style.transform = `translate(${offX - centerCursor}px,${offY - centerCursor
    }px`;
  cursorCircle.style.opacity = '1';

  if (
    e.pageX >= offLeft &&
    e.pageX <= offLeft + boxWidth &&
    e.pageY >= offTop &&
    e.pageY <= offTop + boxHeight
  ) {
    cursorCircle.style.opacity = '1';
  } else {
    cursorCircle.style.opacity = '0';
  }
});




//MENU BUTTON

// const menu = document.querySelector('.menu-btn');
// menu.dataset.toggle = 'true';
// menu.addEventListener('click', function () {
//   const menuItem = document.querySelectorAll('.menu-btn div');

//   if (this.dataset.toggle == 'true') {
//     this.dataset.toggle = 'false';

//     menuItem.forEach((item, index) => {
//       if (index == 0) {
//         item.style.transform = `translate(0, 10px)`;
//       }
//       if (index == 2) {
//         item.style.transform = `translate(0, -10px)`;
//       }
//     });
//     menu.classList.add('menu-cliked');
//   } else {
//     this.dataset.toggle = 'true';

//     menuItem.forEach((item) => {
//       item.style.transform = `translate(0,0)`;
//     });
//     menu.classList.remove('menu-cliked');
//   }
// });


