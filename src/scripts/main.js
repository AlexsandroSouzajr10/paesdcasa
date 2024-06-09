const navToggle = document.querySelector("header nav .toggle"),
  navSpanMiddle = document.querySelector("header nav .toggle .middle"),
  navNavigationBar = document.querySelector("header nav .navigation-bar"),
  navNavigationBarLi = document.querySelectorAll(
    "header nav .navigation-bar li"
  );

// toggle hamburger menu button
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navSpanMiddle.classList.toggle("hide");
  navNavigationBar.classList.toggle("show");
});

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  //window.scroll({
  //  top: to,
  //  behavior: "smooth",
  //});
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset
  const startY = window.scrollY || window.pageYOffset
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time* + from;
    return distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime()- startTime;
    const newX = easeInOutQuart(time, startX , distanceX, duration);
    const newY = easeInOutQuart(time, startY , distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".notification").style.display = "block";
  }, 1500);
});

(function () {
  let darkMode = localStorage.getItem("darkMode");
  const darkSwitch = document.getElementById("switch");

  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  darkSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
})();

const cookieBox = document.querySelector(".cookies__container"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("Pães d'Casa")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "aceitarBtn") {
        // definir cookies por 1 mês. 60 = 1 minuto, 60 = 1 hora, 24 = 1 dia, 30 = 30 dias
        document.cookie =
          "Cookie Pães d'Casa = Pães d'Casa; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener("load", executeCodes);

$(window).on('load', function() {

  let nbImg = 0;
  $('.slider .container-images img').each(function() {
    nbImg += 1;
  });

  $('.slider .arrow').click(function() {
    let n = imageActive();
    
    $('.slider').removeClass('right left');

    if($(this).hasClass('left')) { 
      n -= 1;
      $('.slider').addClass('left');
      setTimeout(function() {
        $('.slider .container-images img.active').addClass('to_left');
      }, 50)
    }
    else if($(this).hasClass('right')) { 
      n += 1;
      $('.slider').addClass('right');
      setTimeout(function() {
        $('.slider .container-images img.active').addClass('to_right');
      }, 50)
    }

    if(n > nbImg) n = 1;
    if(n < 1) n = nbImg;

    setTimeout(function() {
      $('.slider .container-images img').removeClass('active');
      $('.slider .container-images img:nth-child('+n+')').addClass('active');
    
      setTimeout(function() {
        $('.slider .container-images img').removeClass('to_left');
        $('.slider .container-images img').removeClass('to_right');
      }, 500)
    }, 50)
  });

  function imageActive() {
    let n = 1;
    $('.slider .container-images img').each(function(index) {
      if($(this).hasClass('active')) {
        n += index;
      }
    });
    return n;
  }

});


$(window).on('load', function() {

  let nbImg = 0;
  $('.slider .container-images .caption span').each(function() {
    nbImg += 1;
  });

  $('.slider .arrow').click(function() {
    let n = imageActive();
    
    $('.slider').removeClass('right left');

    if($(this).hasClass('left')) { 
      n -= 1;
      $('.slider').addClass('left');
      setTimeout(function() {
        $('.slider .container-images .caption span.active').addClass('to_left');
      }, 50)
    }
    else if($(this).hasClass('right')) { 
      n += 1;
      $('.slider').addClass('right');
      setTimeout(function() {
        $('.slider .container-images .caption span.active').addClass('to_right');
      }, 50)
    }

    if(n > nbImg) n = 1;
    if(n < 1) n = nbImg;

    setTimeout(function() {
      $('.slider .container-images .caption span').removeClass('active');
      $('.slider .container-images .caption span:nth-child('+n+')').addClass('active');
    
      setTimeout(function() {
        $('.slider .container-images .caption span').removeClass('to_left');
        $('.slider .container-images .caption span').removeClass('to_right');
      }, 500)
    }, 50)
  });

  function imageActive() {
    let n = 1;
    $('.slider .container-images .caption span').each(function(index) {
      if($(this).hasClass('active')) {
        n += index;
      }
    });
    return n;
  }

});

$('.order-1, .order-2, .order-3, .order-4, .order-5, .order-6, .order-7, .order-8, .order-9').on('click', function (event) {
  event.preventDefault();
  alert('Produto não disponível!');
});

$('.combo-1, .combo-2, .combo-3, .combo-4, .combo-5').on('click', function (event) {
  event.preventDefault();
  alert('Combo não disponível!');
});

$(document).ready(function() {
  $(".btn-ver-mais").each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      if ($(this).prev("section").hasClass("ver-mais")) {
        $(this).prev("section").addClass("ver-mais-total").removeClass("ver-mais");
        $(this).html("");
      }
    });
  });
});

$(document).ready(function () {
  setTimeout(function () {
    $('a[href]#order, a[href]#order-2, a[href]#order-3, a[href]#order-4, a[href]#order-5, a[href]#order-6, a[href]#order-7, a[href]#order-8, a[href]#order-9, a[href]#combo, a[href]#combo-2, a[href]#combo-3, a[href]#combo-4, a[href]#combo-5').each(function () {
      var href = this.href;

      $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
        if (href.toLowerCase().indexOf("#") >= 0){

        }else {
          window.open(href, '_blank');
        }
      });
    });
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    perPage: 3,
    cover: true,
    heightRatio: 0.2,
    pagination: boolean = false,
    arrows: boolean = true,
    // autoplay: true,
    // interval: 2000,
    gap: "1rem",
    pauseOnHover: false,
    pauseOnFocus: true,
    lazyLoad: "sequential",
    breakpoints: {
      992: {
        perPage: 2,
        height: '18rem',
        arrows: boolean = false,
        pagination: boolean = true,
      },
      600: {
        perPage: 1,
        height: '20rem',
      },
      476: {
        height: '16rem',
      },
      380: {
        height: '14rem',
      },
      height: '6rem',
    },
  }).mount();
});

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  centerSlide: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1001: {
      slidesPerView: 3,
    },
  },
});

const swiperSlideContainer = document.querySelectorAll('.swiper-slide-container');
window.addEventListener('load', function () {
  swiperSlideContainer.forEach(item => {
    item.classList.remove('swiper-slide-container')
  })
});

let pictures = [
  "/src/assets/home/images/baguetes.jpg",
  "/src/assets/home/images/image-4.jpg",
  "/src/assets/home/images/image-2.jpg",
  "/src/assets/home/images/image-3.jpg",
];

let randomImage = pictures[Math.floor(Math.random() * pictures.length)];
let image = "<img src='" + randomImage + "'/>";
document.getElementById("pictures").innerHTML = image;

// window.addEventListener("orientationchange", function() {
//   if (window.orientation == 90 || window.orientation == -90){
//           console.log('[event]orientationcharge: landscape mode', window.orientation)
//   }else {
//     console.log('[event]orientationcharge: portrait mode', window.orientation)
//   }
// });