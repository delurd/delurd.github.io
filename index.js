(() => {
  const hero = document.querySelector('.hero');
  const img = document.querySelector('.hero #imgProfile');
  const profileBg = document.querySelector('#imgProfileBg');
  const hOne = document.querySelector('.hero h1');
  const about = document.querySelector('.hero .about');
  const arrow = document.querySelector('.side-bar .arrow img');
  const arrowLink = document.querySelector('.side-bar .arrow');
  const imagePortfolio = document.querySelectorAll('.image-box');
  const portfolioLink = document.querySelectorAll('.image-box .demo-link');
  const mouseMoveObject = document.querySelectorAll('.mouse-move');
  const mainElement = document.querySelector('main');
  const contentPortfolio = document.querySelector('.portfolio .content');
  const backgroundImage = document.querySelector('#bg-image');
  let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let isDetailOpen = false;
  let isArrowScrollEnable = true;

  const dataPortfolio = {
    Storein: {
      title: 'Storein',
      desc: `A store website to sell or buy various products. This is an exploration project build with Next js, Frammer Motion, Next-auth, React Query, and Prisma. The UI design by buildwithangga.com`,
      image: './assets/images/port/Storein.jpg',
      link: 'https://storein.netlify.app/',
      type: 'Website',
      techStack: 'Next js / PostgreSQL',
      role: 'Full Stack',
      action: 'See Demo',
    },
    Gpret: {
      title: 'G-PRET Website',
      desc: `A Website of G-PRET (Gresik Photography Education)`,
      image: './assets/images/port/gpret.jpg',
      link: 'https://gpret.vercel.app/',
      type: 'Website',
      techStack: 'HTML / SCSS / Javascript',
      role: 'UI / Front-End',
      action: 'See Demo',
    },
    Torestoe: {
      title: 'Torestoe - Restaurant Catalogue',
      desc: 'A restaurant catalogue website that implement Progressive Web Apps. This project is a submission for completing class of Front-End Web Developer Expert in Dicoding Academy',
      image: './assets/images/port/Torestoe.jpg',
      link: 'https://torestoe.netlify.app/',
      type: 'Website',
      techStack: 'HTML / CSS / Javascript',
      role: 'UI / Front-End',
      action: 'See Demo',
    },
    Moneytory: {
      title: 'Moneytory',
      desc: 'An application that is used to record financial income and expenses, easier and a substitute for a big book, organize by category',
      image: './assets/images/port/Moneytory.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.flurs.catatankeuangan',
      type: 'Android App',
      techStack: 'React Native / SQLite',
      role: 'UI / Full Stack',
      action: 'Download App',
    },
    Mantri: {
      title: 'Mantri',
      desc: 'An website to inform about open or close of health practice, using arduino door sensor and combining with practice schedule and prayer time to get result of status practice is open or close',
      image: './assets/images/port/Mantri.jpg',
      link: 'https://mantri-mejeruk.my.id',
      type: 'Web App / IOT',
      techStack: 'Next js / Arduino',
      role: 'UI / Full Stack',
      action: 'See Website',
    },
    Midpoint: {
      title: 'Midpoint Project',
      desc: 'Landing page for Midpoint photography and videography services',
      image: './assets/images/port/Midpoint.jpg',
      link: 'https://delurd.github.io/midpoint',
      type: 'Website',
      techStack: 'HTML / CSS / Javascript',
      role: 'UI / Front-End',
      action: 'See Demo',
    },
  };

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      isThemeDark = event.matches;
    });

  function arrowClickEffect() {
    arrow.parentNode.addEventListener('click', arrowOnClick);
  }
  arrowClickEffect();

  function arrowOnClick() {
    if (isDetailOpen) {
      const bodyPortfolio = document.querySelector('.body-portfolio');
      const bodyDetailPortfolio = document.querySelector('#detailPortfolio');
      bodyDetailPortfolio.style.opacity = 0;

      bodyPortfolio.classList.remove('active');

      setTimeout(() => {
        body.style.overflowY = 'auto';
        arrow.style.rotate = '180deg';
        isDetailOpen = false;
        const bodyPorto = document.querySelector('#detailPortfolio');

        bodyPorto && bodyPorto.remove();
        contentPortfolio.style.display = null;
      }, [300]);
    } else {
      if (window.scrollY > window.innerHeight / 2) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }
    }
  }

  portfolioLink.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
  //DETAIL PORTFOLIO
  imagePortfolio.forEach((selector) => {
    selector.addEventListener('mouseover', () => {
      cursorCircle.innerHTML = 'Detail';
    });
    selector.addEventListener('mouseout', () => {
      cursorCircle.innerHTML = 'Drag';
    });

    selector.addEventListener('click', () => {
      const dataSelect = selector.getAttribute('id');

      body.style.overflowY = 'hidden';
      // contentPortfolio.style.display = 'none';
      arrow.style.rotate = '90deg';
      isDetailOpen = true;

      const bodyDetailPortfolio = document.createElement('div');
      bodyDetailPortfolio.setAttribute('id', 'detailPortfolio');
      bodyDetailPortfolio.innerHTML = `<div class="body-portfolio">
      <div class="content-portfolio">
        <div class="col-left">
          <div class="img-box">
            <img src=${dataPortfolio[dataSelect].image}>
          </div>
          <div class="spec">
            <p>${dataPortfolio[dataSelect].type}</p>
            <p>${dataPortfolio[dataSelect].techStack}</p>
            <p>${dataPortfolio[dataSelect].role}</p>
          </div>
        </div>
        <div class="spacer"></div>
        <div class="col-right">
          <div>
            <h1>${dataPortfolio[dataSelect].title}
            </h1>
          
            <p>${dataPortfolio[dataSelect].desc}</p>
          </div>
          <p>
            <a href=${dataPortfolio[dataSelect].link} target="_blank">${dataPortfolio[dataSelect].action} <span class="arrow">➔</span></a>
          </p>
        </div>
      </div>
    </div>`;
      mainElement.append(bodyDetailPortfolio);
      const bodyPortfolio = document.querySelector('.body-portfolio');

      setTimeout(() => {
        bodyDetailPortfolio.style.opacity = 1;
        setTimeout(() => {
          bodyPortfolio.classList.add('active');
        }, 200);
        // bodyPortfolio.classList.add('active');
      }, 100);
    });
  });

  //EFFECT PAGE 1
  window.addEventListener('mousemove', async (e) => {
    const offX = e.screenX - window.innerWidth / 2;
    const offY = e.screenY - window.innerHeight / 2;
    img.style.transform = `translate(${-offX / 50}px,${-offY / 50}px`;
    profileBg.style.transform = `translate(${-offX / 35}px,${-offY / 35}px`;
    hOne.style.transform = `translate(${-offX / 15}px,${-offY / 15}px`;
    about.style.transform = `translate(${-offX / 35}px,${-offY / 10}px`;
  });

  //BODY ON SCROLL
  const body = document.querySelector('body');
  const bodyStyle = window.getComputedStyle(body);
  body.style.backgroundSize = `${bodyStyle.backgroundSize}`;
  if (window.scrollY > window.innerHeight) {
    body.style.backgroundSize = `${bodyStyle.backgroundSize}`;
    hero.style.opacity = 0;
    // console.log('hello');
  }

  const arrBgSize = body.style.backgroundSize.split('p');

  window.addEventListener('scroll', () => {
    const scrollValueY = window.scrollY;
    const defaultOpacity = isThemeDark ? 0.1 : 0.4;

    //BG On Scroll
    let bgSize = parseFloat(arrBgSize[0]) - scrollValueY * 2;
    body.style.backgroundSize = `${bgSize < 0 ? 0 : bgSize}px`;

    let scaleSize = (scrollValueY * 2 - 0) / (window.innerHeight - 0);
    if (scaleSize >= 0 && scaleSize <= 1) {
      backgroundImage.style.scale = 1 - scaleSize;
      backgroundImage.style.opacity = defaultOpacity - scaleSize / 2;
    }

    //Hero Opacity & Scale
    if (scrollValueY >= 300 && scrollValueY <= window.innerHeight) {
      const opacity = (scrollValueY - 300) / (window.innerHeight - 300);
      let _minOpacity = opacity * 5;
      hero.style.opacity = 1 - _minOpacity;
      hero.style.scale = 1 - opacity;
    }
    if (scrollValueY < 300) {
      hero.style.opacity = 1;
    }

    //Arrow Rotation
    !isDetailOpen
      ? scrollValueY > window.innerHeight / 2
        ? (arrow.style.rotate = '180deg')
        : (arrow.style.rotate = '0deg')
      : null;
  });

  // SCROLL FOLLOW
  const object = document.querySelectorAll('.scrl-obj');

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    object.forEach((object) => {
      let dataScroll = object.getAttribute('data-scrl-spd');
      let dataX = object.getAttribute('data-x');
      let dataY = object.getAttribute('data-y');

      if (dataScroll == null) {
        dataScroll = 3.5;
      }
      if (dataX == null) {
        dataX = 0;
      }
      if (dataY == null) {
        dataY = 0;
      }

      object.style.transform = `translate(${dataX}px, ${
        -(
          window.scrollY +
          Math.floor(window.innerHeight / 2) -
          (object.offsetTop + object.scrollHeight / 2)
        ) / dataScroll
      }px)`;
    });
  }

  //GSAP DRAGABLE
  const slideBox = document.querySelector('.content');
  const conntentStyle = window.getComputedStyle(slideBox);

  const sliderIndicatorPortfolio = document.querySelector(
    '.portfolio-indicator-active'
  );
  function indicatorPortfolio() {
    const translateX = conntentStyle.transform.split(',')[4];
    // const maxWidth = slideBox.scrollWidth / 2;
    const totalContent = 6;
    const maxWidth = 780 * totalContent;
    let olahX = -translateX;
    olahX < 0 && (olahX = 0);
    olahX > maxWidth && (olahX = maxWidth);

    let normalizeX = (olahX - 0) / (maxWidth - 0);

    sliderIndicatorPortfolio.style.width = `${normalizeX * 100 + 5}%`;
  }

  function dragg() {
    Draggable.create('.content', {
      type: 'x',
      // bounds: ".container",
      edgeResistance: 0.95,
      onDrag: function (e) {
        indicatorPortfolio();
      },
      bounds: {
        left: -slideBox.scrollWidth + window.innerWidth,
        width: slideBox.scrollWidth,
      },
    });
  }

  dragg();
  window.addEventListener('resize', () => {
    dragg();
  });

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

    cursorCircle.style.transform = `translate(${offX - centerCursor}px,${
      offY - centerCursor
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

  // //SCROLL ON CONTENT PORTFOLIO
  // const onContentScroll = (e) => {
  //   const contentWidth = area.scrollWidth;
  //   const scrollPosition = area.style.transform
  //     .split('(')[1]
  //     .split(',')[0]
  //     .split('p')[0];

  //   const _deltaY = e.deltaY * -1;
  //   const countPosX = parseInt(scrollPosition) + _deltaY;

  //   console.log(contentWidth);

  //   if (countPosX < 200 && countPosX > -3900) {
  //     e.preventDefault();
  //     area.style.transform = `translate3d(${countPosX}px, 0px, 0px)`;
  //   } else {
  //     // console.log('SELESAI');
  //   }

  //   // console.log(e.deltaY * -0.1);
  // };

  // area.addEventListener('wheel', onContentScroll);

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
})();
