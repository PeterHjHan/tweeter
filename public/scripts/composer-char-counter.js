$(document).ready(function () {
  
  $('.tweet-text-box').on('keyup', function () {
    const tweetInputLength = this.value.length;
    const defaultCounter = $(this).parents("form").children('span.counter');

    $(defaultCounter).text(defaultCounter.text() -1);

  });
});