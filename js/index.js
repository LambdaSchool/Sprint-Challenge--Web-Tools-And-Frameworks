$(function() {
  $('[data-toggle="tooltip"').tooltip();

  $('.scroll-fade').css('opacity', 0);

  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $('.scroll-fade').each(function() {
      let objectBottom = $(this).offset().top + $(this).outerHeight();

      if (windowBottom > objectBottom) {
        $(this).fadeTo('slow', 1);
      }
    });
  });
});
