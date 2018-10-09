$(document).ready(function () {
  
  $('.tweet-text-box').on('keyup', function () {
    const tweetInputLength = this.value.length;
    // const defaultCounter = document.querySelector('span.counter').textContent;
    const defaultCounter = $(this).parents("form").children('span.counter').text();
 

    console.log( defaultCounter - tweetInputLength);
    


  
  
    
    

    
    ;


  });
});