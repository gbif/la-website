var currentSlide;
var rand;

$(document).ready(function() {

  function loadDataImg(img) {
    // img.attr('src', img.data('lazy-load-src'));
    img.removeAttr('loading');
    // console.log(img.data('lazy-load-src'));
    // console.log(img.attr('src'));
    // console.log(img);
  }

  function lazyLoadCarousel(id, next) {
    if (next) {
      var $nextImage = $('#la-partipants-carousel .active.carousel-item').next('.carousel-item').find(id);
      loadDataImg($nextImage);
    } else {
      var $currentImage = $('#la-partipants-carousel .active.carousel-item').find(id);
      loadDataImg($currentImage);
    }
  }

  function initCarousel(){

    $('#la-partipants-carousel').on('slid.bs.carousel', function() {
      // lazyLoadCarousel('.img-first', false);
      // lazyLoadCarousel('.img-snd', false);
      lazyLoadCarousel('.img-first', true);
      lazyLoadCarousel('.img-snd', true);
    });

    var $item = $('#la-partipants-carousel .carousel-inner .carousel-item');

    var $numberofSlides = $('#la-partipants-carousel > ol li').length;
    // Exclude ALA as first slide
    var $currentSlide = Math.floor((Math.random() * ($numberofSlides - 1 - 1)) + 1);
    // console.log($currentSlide);
    $('#la-partipants-carousel .carousel-indicators li').each(function(){
      var $slideValue = $(this).attr('data-slide-to');
      // console.log($slideValue);
      if($currentSlide == $slideValue) {
        $(this).addClass('active');
        $item.eq($slideValue).addClass('active');
      } else {
        $(this).removeClass('active');
        $item.eq($slideValue).removeClass('active');
      }
    });

    // Load 1st active image
    lazyLoadCarousel('.img-first', false);
    lazyLoadCarousel('.img-snd', false);

    //$('#la-partipants-carousel').css('visibility','visible');
    $('#la-partipants-carousel').fadeIn('slow');

    // Enable BS4 tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

  }

  initCarousel();
});
