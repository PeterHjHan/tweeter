/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
   const tweetData = {
     "user": {
       "name": "Newton",
       "avatars": {
         "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
         "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
       },
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
     "created_at": 1461116232227
   }

$(() => {

function createTweetElement(tweetData){

    let $header = $('<header>')
    let $avatarImage = $('<img id="avatar">').attr('src', tweetData.user.avatars.small)
    let $headerUserName = $('<p>').addClass('user-name').append(tweetData.user.name)
    let $tweeterHandle = $('<p>').addClass('tweeter-handle').append(tweetData.user.handle)

    let $tweetLog = $('<p>').addClass('tweet-log').append(tweetData.content.text)
    let $footerHr = $('<hr>').addClass("footer-hr")
    let $footer = $('<footer>');
    let $footerText = $('<p>').addClass('footer-text').append(tweetData.created_at);
    let $footerIcons = $('<div>').addClass('footer-icons');
    let $logos = $('<img>').attr('src','../image/bird.png');

  return $header
    .append($avatarImage)
    .append($headerUserName)
    .append($tweeterHandle)
    .append($tweetLog)

    .append($footer)
    .append($footerHr)
    .append($footerText)
    .append($footerIcons)
    .append($logos)
   
}
var $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet); 
});

