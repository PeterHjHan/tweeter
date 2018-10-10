$(() => {
  
  $('.tweet-text-box').on('keyup', function () {
    const tweetInputLength = this.value.length;
    var remainingLeft = 140 - tweetInputLength;

    $('.counter').text(remainingLeft);    
    if(remainingLeft < 0) {
      $('.counter').addClass("changeTextToRed");
    } else {
      $('.counter').removeClass("changeTextToRed");
    }
  });
});