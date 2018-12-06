$(document).ready(function(){
  $('#eventDescriptions>div').hide();
  $('#eventTitles a').click(function(){
    var target = $(this).attr("rel");
    $(target).show('slow');
  });
  $('#eventDescriptions a.close').click(function(){
    $(this).parent().parent().hide('slow');
  })
});
