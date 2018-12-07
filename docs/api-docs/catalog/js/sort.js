var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#team > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#team > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
