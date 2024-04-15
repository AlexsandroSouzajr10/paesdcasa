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