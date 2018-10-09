$(document).ready(function () {
  
  $('.tweet-text-box').on('keyup', function () {
    const defaultCounter = $(this).parents("form").children('span.counter');
    $(defaultCounter).text(defaultCounter.text() -1);
      if(defaultCounter < 0) {
        $(defaultCounter.text()).css({"color": "red"});
      }

  });
});