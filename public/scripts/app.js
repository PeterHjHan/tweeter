/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();
    const data = $(event.target).serialize();
    const userInput = $('textarea[name=text]').val();
    const tweetLength = userInput.length;

    if (tweetLength >= 140) {
      alert("Your Tweet is too long, you don't know how to count?");
    } else if (tweetLength === 0){
      alert("SAY SOMETHING U IDIOT");
    } else {
      $.ajax('/tweets', {
          method: 'POST',
          data: data
        })
        .then(() => {
          //send the data
          console.log("hello");
        })
    }
  });

  function loadTweets() {
    $.ajax('/tweets').then(function (data) {
      renderTweet(data);
    });
  }





  // $('form').on('submit', (e) => {
  //   e.preventDefault();

  //   // 1. Capture data the user enetered
  //   let data = $(e.target).serialize();

  //   // 2. Submit using ajax
  //   $.ajax('/products', {method: 'POST', data: data}).then(() => {
  //     $('ul#product-list').empty();
  //     loadAndRenderProduct();
  //   });
  // });

  function createTweetElement(tweetData) {

    let $article = $('<article>');


    //header references
    let $avatarImage = $('<img id="avatar">')
      .attr('src', tweetData.user.avatars.small);

    let $headerUserName = $('<p>')
      .addClass('user-name')
      .append(tweetData.user.name);

    let $tweeterHandle = $('<p>')
      .addClass('tweeter-handle')
      .append(tweetData.user.handle);

    let $header = $('<header>')
      .append($avatarImage)
      .append($headerUserName)
      .append($tweeterHandle)

    //body references                

    let $tweetLog = $('<p>')
      .addClass('tweet-log')
      .append(tweetData.content.text)

    //footer references

    let $footerText = $('<p>')
      .addClass('footer-text')
      .append(tweetData.created_at);

    let $logos = $('<img>')
      .attr('src', tweetData.user.avatars.small)
      .addClass('logo');

    let $footer = $('<footer>')
      .append($footerText)
      .append($logos)

    return $article
      .append($header)
      .append($tweetLog)
      .append($footer)

  }

  function renderTweet(tweetData) {
    tweetData.forEach(function (element) {
      $('#tweets-container').append(createTweetElement(element));
    })
  }

  loadTweets();


});