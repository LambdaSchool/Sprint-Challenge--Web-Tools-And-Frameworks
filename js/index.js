$(function() {
  $('[data-toggle="tooltip"').tooltip();

  $('.scroll-fade').css('opacity', 0);

  $(window).scroll(function() {
    $('.scroll-fade').each(function() {
      let objectBottom = $(this).position().top + $(this).outerHeight();
      let windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > objectBottom) {
        $(this).fadeTo('slow', 1);
      }
    });
  });
});
