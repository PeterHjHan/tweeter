$(() => {
  
  $('.tweet-text-box').on('keyup', function () {
    const tweetInputLength = this.value.length;
    const defaultCounter = $(this).parents("form").children('span.counter');
    const textCounter = $(defaultCounter).text(140 - tweetInputLength);

    if($(defaultCounter).text() < 0) {
      $(textCounter).addClass("changeTextToRed");
    } else {
      $(textCounter).removeClass("changeTextToRed");
    }
  });
});