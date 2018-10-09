$(document).ready(function () {
  const textArea = document.querySelector('.tweet-text-box');

  $('.tweet-text-box').on('keyup', function() {
    
    console.log(this.value.length); //The this keyword here refers to something else!
  });
});

//use k