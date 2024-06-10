/**
* Template Name: Siimple
* Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
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
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  const toogleNav = function () {
    let navButton = select('.nav-toggle')
    navButton.classList.toggle('nav-toggle-active')
    navButton.querySelector('i').classList.toggle('bx-x')
    navButton.querySelector('i').classList.toggle('bx-menu')

    select('.nav-menu').classList.toggle('nav-menu-active')
  }
  on('click', '.nav-toggle', function (e) {
    toogleNav();
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.nav-menu .drop-down > a', function (e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('drop-down-active')
    this.parentElement.classList.toggle('active')
  }, true)

  /**
   * Scrool links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      select('.nav-menu .active').classList.remove('active')
      this.parentElement.classList.toggle('active')
      toogleNav();
    }
  }, true)


  new WOW().init();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function (swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);



  window.onscroll = function () {
    const goToTopBtn = document.getElementById('goToTopBtn');
    const footer = document.getElementById('footer'); // Reemplaza 'footer' con el ID de tu elemento footer

    // Obtener la posición del scroll y la altura de la ventana
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Obtener la posición y altura del footer
    const footerPosition = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    // Calcular la posición del final de la página
    const endOfPage = footerPosition + footerHeight;

    // Determinar si el usuario ha llegado al footer o al final de la página
    if (scrollPosition + windowHeight >= endOfPage) {
      // Estás en el footer o al final de la página
      goToTopBtn.classList.add('footer-goToTopBtn'); // Agrega una clase para cambiar el color del icono a azul
    } else {
      // No estás en el footer
      goToTopBtn.classList.remove('footer-goToTopBtn'); // Agrega una clase para cambiar el color del icono a azul
    }

    // Mostrar u ocultar el botón de scroll-to-top basado en la posición del scroll
    if (scrollPosition > 20) {
      goToTopBtn.style.display = 'block';
    } else {
      goToTopBtn.style.display = 'none';
    }
  };


})()

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function toggleLanguageParam() {
  var currentUrl = window.location.href;
  var langParam = currentUrl.indexOf('lang=');

  // Determine the current language and toggle
  if (langParam !== -1) {
    var currentLang = currentUrl.substring(langParam + 5, langParam + 7);
    var newLang = currentLang === 'es' ? 'en' : 'es';
    var newUrl = currentUrl.replace('lang=' + currentLang, 'lang=' + newLang);
    window.location.href = newUrl;
  } else {
    var separator = currentUrl.indexOf('?') !== -1 ? '&' : '?';
    var newUrl = currentUrl + separator + 'lang=es'; // Default to Spanish if no lang param exists
    window.location.href = newUrl;
  }
}