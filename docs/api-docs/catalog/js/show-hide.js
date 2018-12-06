
$(document).ready(function(){
  $('#eventDescriptions>div').hide();
  $('#eventTitles a').click(function(){
    var target = $(this).attr("rel");
    $(target).show('fast');
    $('#eventTitles a').hide();
    $('#eventDescriptions a.close').show();
  });

  $('#eventDescriptions a.close').click(function(){
    $(this).parent().parent().hide('fast');
    $('#eventTitles a').show();
  })
});
