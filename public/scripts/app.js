// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// // Test / driver code (temporary). Eventually will get this from the server.
// // var moment = require('moment');

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];
// var dataJson = JSON.stringify(data);


$(document).ready(function () {

  // var $form = $('form').on('submit', function(event){
  //   event.preventDefault();
  //   var tweetStrings= $('form').serialize();
  // });
  loadTweets();

  function loadTweets() {
     $.ajax({
      url: '/tweets',
      type: 'GET',
      success: function (result) {
        result.forEach(function(tweet){
          renderTweets(tweet);
        });
      },
      error: function(err){
        alert("there is an error");
      }
    });
  }

  $('form').on('submit',function(e){
    e.preventDefault();
    let tweet = $('#tweettext').val();
    console.log(tweet);
    let data = {
      text: tweet
    };
    if (!tweet.length){
      alert("You need to type something in, dumbdumb")
     } else if (tweet.length > 140) {
        alert('your tweet is too damn long')
      } else {
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: data,
        success: function () {
          console.log("it works!");  
          loadTweets();
          
        },
        error: function(err){
          alert("Please type something in!");
        }
      });
      
     
    
    }
      
  });

  // function postTweets(tweetStrings) {
  //   let tweet = $('#tweettext').val();
  //   console.log(tweet);
  //   let data = {
  //     text: tweet
  //   };
  //     $.ajax({
  //       url: '/tweets',
  //       type: 'POST',
  //       data: data,
  //       success: function () {
  //       console.log("it works!");  
  //       }
  //     });
  //   // });    
  // }
  //postTweets();

  function renderTweets(data) {
    console.log(data);
    createTweetElement(data);

    // data.forEach(tweet => {
    //   console.log(tweet);
    //   //createTweetElement(tweet);
    // });
    // console.log(tweets);    
    // for (var content of tweets) {
      
      // }
    // var newTweet = createTweetElement(tweet);
    // $('.showTweets').append(newTweet);

    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

  }

  function createTweetElement(tweet) {
    let $tweet = $('<section>').addClass('showTweets');
    let $article = $('<article>').addClass('tweet');
    let $header = $('<header>');
    
    let $avatar = $('<img>').addClass('avatar').attr('src', tweet.user.avatars.small); //style is not yet created (still inline)

    let $tweetername = $('<span>').addClass('tweetername')
    $tweetername.text(tweet.user.name);

    let $tweetholla = $('<span>').addClass('tweetholla')
    $tweetholla.text(tweet.user.handle);

    let $tweetbod = $('<section>').addClass('tweetbod');

    let $tweettimer = $('<footer>').addClass('tweettimer')
    $tweettimer.text(tweet.created_at); 

    let $i_flag = $('<i>').addClass('fas fa-flag');

    let $i_rt = $('<i>').addClass('fas fa-retweet');

    let $i_heart = $('<i>').addClass('far fa-heart');
    
    $header.append($avatar);
    $header.append($tweetername);
    $header.append($tweetholla);
    $tweetbod.text(tweet.content.text);
    $tweettimer.append($i_flag);
    $tweettimer.append($i_rt);
    $tweettimer.append($i_heart);
    $tweet.append($article);
    $article.append($header);
    $article.append($tweetbod);
    $article.append($tweettimer);
    // console.log($header);
    $('.container').append($tweet);
    //console.log('test');

    // //FOOTER PART
    // var footer 
    // var img 

    // footer.append(img);

    // tweet.append(footer)


    // return $tweet;
  }


  // renderTweets(data);
  renderTweets();
});