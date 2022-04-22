var currentSlide;
var rand;

$(document).ready(function() {

  function initCarousel(){
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


    //$('#la-partipants-carousel').css('visibility','visible');
    $('#la-partipants-carousel').fadeIn('slow');


    // Enable BS4 tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

  }

  initCarousel();
});
