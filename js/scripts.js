
/* Звёздный рейтинг товаров */
$.fn.rater = function (options) {
    var opts = $.extend({}, $.fn.rater.defaults, options);
    return this.each(function () {
        var $this = $(this);
        var $on = $this.find('.rating_starOn');
        var $off = $this.find('.rating_starOff');
        opts.size = $on.height();
        if (opts.rating == undefined) opts.rating = $on.width() / opts.size;

        $off.mousemove(function (e) {
            var left = e.clientX - $off.offset().left;
            var width = $off.width() - ($off.width() - left);
            width = Math.ceil(width / (opts.size / opts.step)) * opts.size / opts.step;
            $on.width(width);
        }).hover(function (e) { $on.addClass('rating_starHover'); }, function (e) {
            $on.removeClass('rating_starHover'); $on.width(opts.rating * opts.size);
        }).click(function (e) {
            var r = Math.round($on.width() / $off.width() * (opts.units * opts.step)) / opts.step;
            $off.unbind('click').unbind('mousemove').unbind('mouseenter').unbind('mouseleave');
            $off.css('cursor', 'default'); $on.css('cursor', 'default');
            opts.id = $this.attr('id');
            $.fn.rater.rate($this, opts, r);
        }).css('cursor', 'pointer'); $on.css('cursor', 'pointer');
    });
};

$('#devices .img-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   // dots: true,
   // arrows: true,
   // lazyLoad: 'ondemand',
   // responsive: [
   //    {
   //      breakpoint: 1024,
   //      settings: {
   //        slidesToShow: 3,
   //        slidesToScroll: 3,
   //        infinite: true,
   //        dots: true
   //      }
   //    },
   //    {
   //      breakpoint: 600,
   //      settings: {
   //        slidesToShow: 2,
   //        slidesToScroll: 2
   //      }
   //    }
   //  ],
   prevArrow: '.devices-arrow.prev-arrow',
   nextArrow: '.devices-arrow.next-arrow'
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
// speed: 500,
// fade: true,
// cssEase: 'linear',
prevArrow: '.faqs-arrow.prev-arrow',
nextArrow: '.faqs-arrow.next-arrow',
responsive: [{ 
    breakpoint: 500,
    settings: {
        dots: false,
        arrows: false,
    } 
}]
});