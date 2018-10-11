

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();
    const data = $(event.target).serialize();
    let userInput = $('textarea[name=text]').val();
    const tweetLength = userInput.length;


    if (tweetLength >= 140) {
      alert("Your Tweet is too long, you don't know how to count?");
    } else if (tweetLength === 0){
      alert("SAY SOMETHING U IDIOT");
    } else {
      $.ajax('/tweets', {
          method: 'POST',
          data: data,
        })
        .then(() => {
          $.ajax('/tweets').then(() => {
            loadTweets();
            $('textarea[name=text]').val('')
          });
        })
    }
  });

  function loadTweets() {
    $.ajax('/tweets').then(function (data) {
      renderTweet(data.reverse());
    });
  }

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
      .text(tweetData.content.text)

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
    $('#tweets-container').empty();
    tweetData.forEach(function (element) {
      $('#tweets-container').append(createTweetElement(element));
    })
 
  }

  $('.compose-button').click(function() {
    $('.new-tweet').slideToggle("slow");
    

    
  })

  loadTweets();


});
