const logoImage = document.querySelector("header nav .logo img");
  navToggle = document.querySelector("header nav .toggle"),
  navSpanMiddle = document.querySelector("header nav .toggle .middle"),
  navNavigationBar = document.querySelector("header nav .navigation-bar"),
  navNavigationBarLi = document.querySelectorAll(
    "header nav .navigation-bar li"
  );
  const menuOverlay = document.querySelector(".overlay");

// Hamburger menu
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navSpanMiddle.classList.toggle("hide");
  navNavigationBar.classList.toggle("show");
  menuOverlay.classList.toggle("active");
});

const navLink = document.querySelectorAll(".navlink a");

function linkActive() {
  navLink.forEach(i => i.classList.remove("active"));
  this.classList.add("active");

  navNavigationBar.classList.remove("show")
  navToggle.classList.remove("active");
  navSpanMiddle.classList.toggle("hide");
  menuOverlay.classList.toggle("active");
}

navLink.forEach(i => i.addEventListener('click', linkActive));

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
    logoImage.src = "/src/assets/logo/icons/logo.png"
  };

  if (darkMode === "enabled") {
    enableDarkMode();
    logoImage.src = "/src/assets/logo/icons/logo-white.png"
  }

  darkSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
      logoImage.src = "/src/assets/logo/icons/logo-white.png"
    } else {
      disableDarkMode();
      logoImage.src = "/src/assets/logo/icons/logo.png"
    }
  });
})();

let pictures = [
  "/src/assets/home/images/pao-caseiro.jpg",
  "/src/assets/home/images/bolo-caseiro.jpg",
  "/src/assets/home/images/coxinha.jpg",
  "/src/assets/home/images/pastel-folhado.jpg",
  "/src/assets/home/images/pao-rolos-rolls.jpg",
];

let randomImage = pictures[Math.floor(Math.random() * pictures.length)];
let image = "<img src='" + randomImage + "'/>";
document.getElementById("pictures").innerHTML = image;

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".notification").style.display = "block";
  }, 1500);
});

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

$('.order-1, .order-2, .order-3, .order-4, .order-5, .order-6, .order-7, .order-8, .order-9').on('click', function (event) {
  event.preventDefault();
  alert('Produto não disponível!');
});

$('.combo-1, .combo-2, .combo-3, .combo-4, .combo-5').on('click', function (event) {
  event.preventDefault();
  alert('Combo não disponível!');
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

$(document).ready(function(){
  
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 80
          }, 500);
          return false;
        }
      }
    });
    
    var offset = 100,
      scroll_top_duration = 700,
      $back_to_top = $('.btn-back-to-top'),
      $thedial = $('.dial'),
      $progress_bar = $('.back-to-top');
    
      $thedial.knob({
        'min' : 0,
        'max' : 100,
        'width' : 50,
        'height' : 50,
        'fgColor' : '#FE5000',
        'skin' : 'tron',
        'thickness' : .2,
        'displayInput' : false,
        'displayPreview' : false,
        'readOnly' : true
      });
  
    $(window).scroll(function(){
      
      ( $(this).scrollTop() > offset ) ? $progress_bar.addClass('is-visible') : $progress_bar.removeClass('is-visible');
      
        var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
  
        $('.dial').val(scrollPercent).change();
        
        if (s > 0 ) {
           $('header').addClass('scrolled fade');
       }
  
        if (s <= 0 ) {
          $('header').removeClass('scrolled fade');
        }    
       
      });
  
    $back_to_top.on('click', function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
          }, scroll_top_duration
        );
      });
  });

  const heroImage = document.querySelectorAll(".heroImage");
  const bgTitle = document.querySelectorAll(".bgTitle");
  const cardsImage = document.querySelectorAll(".imageCard")
  const imageLoader = document.querySelectorAll(".imageLoader")
  const sectionLoader = document.querySelectorAll(".sectionLoader")
  
  window.addEventListener('load', () => {
      heroImage.forEach(item => {
          item.classList.remove("heroImage")
      })
      bgTitle.forEach(item => {
          item.classList.remove("bgTitle")
      })
      cardsImage.forEach(item => {
          item.classList.remove("imageCard")
      })
      imageLoader.forEach(item => {
          item.classList.remove("imageLoader")
      })
      sectionLoader.forEach(item => {
          item.classList.remove("sectionLoader")
      })
  });