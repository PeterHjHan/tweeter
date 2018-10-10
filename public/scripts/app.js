/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
$(() => {

function createTweetElement(tweetData){

    let $article = $('<article>');
    
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

    let $tweetLog = $('<p>')
                    .addClass('tweet-log')
                    .append(tweetData.content.text)
    

    let $footerText = $('<p>')
                     .addClass('footer-text')
                     .append(tweetData.created_at);
    
    let $footerIcons = $('<div>')
    .addClass('footer-icons');
    
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
    // .append($footerHr)
    // .append($footerText)
    // .append($footerIcons)
    // .append($logos)
   
}

function renderTweet(tweetData) {
  tweetData.forEach(function (element) {
    $('#tweets-container').append(createTweetElement(element));
  })
}

var $tweet = renderTweet(data);
$('#tweets-container').append($tweet); 
});

