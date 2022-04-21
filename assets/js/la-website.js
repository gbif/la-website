// Enable BS4 tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// carousel on swipe
// https://stackoverflow.com/questions/21349984/how-to-make-bootstrap-carousel-slider-use-mobile-left-right-swipe
$('.carousel').on('touchstart', function(event){
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event){
    const xMove = event.originalEvent.touches[0].pageX;
    const sensitivityInPx = 5;

    // https://stackoverflow.com/questions/21349984/how-to-make-bootstrap-carousel-slider-use-mobile-left-right-swipe
    if( Math.floor(xClick - xMove) > sensitivityInPx ){
      $(this).carousel('next');
    }
    else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
      $(this).carousel('prev');
    }
  });
  $(this).on('touchend', function(){
    $(this).off('touchmove');
  });
});
