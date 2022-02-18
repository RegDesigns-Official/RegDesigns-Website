/**
* Template Name: FlexStart - v1.4.0
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });



  var stage;

  function init() {
    var canvas = document.getElementById("canvas");
    if (!canvas || !canvas.getContext) return;

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(true);
    stage.mouseMoveOutside = true;
    createjs.Touch.enable(stage);

    var imgList = [
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/1.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/2.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/3.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/4.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/5.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/6.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/7.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/8.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/10.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/11.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/12.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/13.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/14.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/15.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/16.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/17.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/18.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/19.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/20.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/21.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/22.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/23.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/24.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/25.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/26.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/27.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/28.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/29.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/30.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/31.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/32.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/33.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/34.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/35.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/36.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/37.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/38.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/39.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/40.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/41.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/42.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/43.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/44.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/45.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/46.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/47.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/48.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/49.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/50.png",
      "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/51.png"];
    var images = [], loaded = 0, currentFrame = 0, totalFrames = imgList.length;
    var rotate360Interval, start_x;

    var bg = new createjs.Shape();
    stage.addChild(bg);

    var bmp = new createjs.Bitmap();
    stage.addChild(bmp);




    function load360Image() {
      var img = new Image();
      img.src = imgList[loaded];
      img.onload = img360Loaded;
      images[loaded] = img;
    }

    function img360Loaded(event) {
      loaded++;
      bg.graphics.clear()
      bg.graphics.beginFill("#bbc").drawRect(0, 0, stage.canvas.width * loaded / totalFrames, stage.canvas.height);
      bg.graphics.endFill();

      if (loaded == totalFrames) start360();
      else load360Image();
    }


    function start360() {
      document.body.style.cursor = 'none';

      // 360 icon
      var iconImage = new Image();
      iconImage.src = "";
      iconImage.onload = iconLoaded;

      // update-draw
      update360(0);

      // first rotation
      rotate360Interval = setInterval(function () { if (currentFrame === totalFrames - 1) { clearInterval(rotate360Interval); addNavigation(); } update360(1); }, 25);
    }

    function iconLoaded(event) {
      var iconBmp = new createjs.Bitmap();
      iconBmp.image = event.target;
      iconBmp.x = 20;
      iconBmp.y = canvas.height - iconBmp.image.height - 20;
      stage.addChild(iconBmp);
    }

    function update360(dir) {
      currentFrame += dir;
      if (currentFrame < 0) currentFrame = totalFrames - 1;
      else if (currentFrame > totalFrames - 1) currentFrame = 0;
      bmp.image = images[currentFrame];
    }


    //------------------------------- 
    function addNavigation() {
      stage.onMouseOver = mouseOver;
      stage.onMouseDown = mousePressed;
      document.body.style.cursor = 'auto';
    }

    function mouseOver(event) {
      document.body.style.cursor = 'pointer';
    }

    function mousePressed(event) {
      start_x = event.rawX;
      stage.onMouseMove = mouseMoved;
      stage.onMouseUp = mouseUp;

      document.body.style.cursor = 'w-resize';
    }

    function mouseMoved(event) {
      var dx = event.rawX - start_x;
      var abs_dx = Math.abs(dx);

      if (abs_dx > 5) {
        update360(dx / abs_dx);
        start_x = event.rawX;
      }
    }

    function mouseUp(event) {
      stage.onMouseMove = null;
      stage.onMouseUp = null;
      document.body.style.cursor = 'pointer';
    }

    function handleTick() {
      stage.update();
    }

    document.body.style.cursor = 'progress';
    load360Image();


    // TICKER
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.useRAF = true;
  }




  // Init
  window.addEventListener('load', init, false);
})();