$(function(){
  // Header Scroll Change
  $(window).scroll(function(){
    if($(this).scrollTop() > 50 ) {
      $('header, .btn-top').addClass('active');
    } else {
      $('header, .btn-top').removeClass('active');
    }
    
  })
  // Slick Slider - welcome
  $('.slideshow').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });

  // TypeIt
  $('#typing').typeIt({
    strings: ["Business strategy.", "Organization Management.", "Business Innovation."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  // Faq-Accordion
  $('.faq-item').eq(0).addClass('active').children('.faq-desc').show();
  $('.faq-item').click(function(){
    $(this).toggleClass('active').children('.faq-desc').stop().slideToggle().parent().siblings().removeClass('active').children('.faq-desc').stop().slideUp();
  })

   // Slick Slider - review, guide
   $('.review-slider, .mockup-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Video Modal
  $('.video-frame .open-modal').click(function() {
    $('.video-modal').fadeIn();
    $('body').addClass('active');
  })
  $('.close-modal').click(function() {
    $('.video-modal').fadeOut();
    $('body').removeClass('active');
  })
  
  //Smooth Scrolling
  $('.gnb a, .btn-top').click(function(){
    $.scrollTo(this.hash || 0, 900);
  })

  $('.trigger').click(function(){
    $('.trigger, .gnb').toggleClass('active');
    
  })
  $('.gnb > a, section').click(function(){
    $('.trigger, .gnb').removeClass('active');
    
  })

  // Wow Scroll Reveal Animation
  wow = new WOW({
    boxClass:     'wow',      // default
    offset:       150,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();
})