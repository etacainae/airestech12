$('#devices .devices-slider__wrap').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 3000,
   prevArrow: '.devices-arrow.prev-arrow',
   nextArrow: '.devices-arrow.next-arrow'
  });

$('.structure-img__numbers .number').hover(function() {
  $('#' + $(this).data('id')).addClass('hover');
}, function() {
  $('#' + $(this).data('id')).removeClass('hover');
});
$('.structure-list__item').hover(function() {
  $('[data-id="'+$(this).attr('id')+'"]').addClass('hover');
}, function() {
  $('[data-id="'+$(this).attr('id')+'"]').removeClass('hover');
});

$("#how-work .video-wrap .video-start").click(function() {
    var video = $("#how-work .video-wrap .video video").get(0);

    if ( video.paused ) {
        video.play();
        $(".play").hide();
        $(".pause").show();
    } else {
        video.pause();
        $(".play").show();
        $(".pause").hide();
    }

    return false;
});

$('.faqs-list__item .question').click(function(){
  $('.faqs-list__item .answer').not($(this).next()).slideUp('slow');
  $('.faqs-list__item .elem-condition').removeClass('active');
  $(this).siblings('.answer').slideDown('slow');
  $(this).children('.elem-condition').toggleClass('active');
});
$(".faqs-slider").slick({
dots: true,
customPaging : function(slider, i) {
var thumb = $(slider.$slides[i]).data();
return '<p>'+(i+1)+'</p>';
},
slidesToShow: 1,
slidesToScroll: 1,
swipe: false,
arrows: true,
prevArrow: '.faqs-arrow.prev-arrow',
nextArrow: '.faqs-arrow.next-arrow'
});
// $(document).ready(function() {
//    $(".plus").click(function(){
//         var input = $(this).siblings(".amount-input");
//           input[0].stepUp();
//    });
//    $(".minus").click(function(){
//         var input = $(this).siblings(".amount-input");
//           input[0].stepDown();
//    });
// });
$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).siblings('.amount-input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).siblings('.amount-input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
$('#homepage-instagram .instagram-slider').slick({
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    centerMode: true,
    responsive: [
        {
          breakpoint: 1840,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1380,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: true,
            prevArrow: '.homepage-instagram-arrow.prev-arrow',
            nextArrow: '.homepage-instagram-arrow.next-arrow'
          }
        }
    ]
  });
// burger-menu header
$(document).ready(function(){
  var button = $('header .burger-btn');
  var form = $('header');
  var body = $('body');

  button.click(function(){
    form.toggleClass("open-burger");
    body.toggleClass("hidden"); 
  });
});
$('.user-menu .active-account ').hover(function(){
  $(this).toggleClass('active');
});
$('.technology-section .top-text .mobile-open').click(function(){
  $(this).parent().siblings('.technology-posts').slideToggle();
  $(this).toggleClass('active');
});
$('.account-sidebar .mobile-btn').click(function(){
  $('.account-sidebar').toggleClass('active');
});