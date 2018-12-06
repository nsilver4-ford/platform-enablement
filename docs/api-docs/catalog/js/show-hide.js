var $button = $('#myButton'),
  $text   = $('#myText'),
  visible = true;

$button.click(function(){
if ( visible ) {
  $text.slideUp('fast',function(){
    $text.addClass('bomb-hide')
         .slideDown(0);
  });
} else {
  $text.slideUp(0,function(){
    $text.removeClass('bomb-hide')
         .slideDown('fast');
  });
}
visible = ! visible;
});
