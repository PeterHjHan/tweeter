
$(() => { 

  $('form').on('submit', (event) => {
    event.preventDefault();
    const data = $(event.target).serialize();
    let userInput = $('textarea[name=text]').val();
    const tweetLength = userInput.length;

    if (tweetLength >= 140) {
      $('.error-message').text("ERROR: You are tweeting too much").slideDown();
    } else if (tweetLength === 0){
      $('.error-message').text("ERROR: You must say something").slideDown();
    } else {
      $.ajax('/tweets', {
          method: 'POST',
          data: data,
        })
        .then(() => {
          $.ajax('/tweets').then(() => {
            $('.error-message').slideUp();
            loadTweets();
            $('textarea[name=text]').val('')
            //TODO: need to fix the text length, does not return to 140
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
      .text(tweetData.content.text).addClass('tweet-log')

    //footer references

    let $footerText = $('<p>')
      .addClass('footer-text')
      .append(moment(tweetData.created_at).fromNow());
    let $logos = $('<ul>')
    .append(`<li><i class="fas fa-heart"></i></li>`)
    .append(`<li><i class="fas fa-retweet"></i></li>`)
    .append(`<li><i class="fas fa-flag"></i></li>`)
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
