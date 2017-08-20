$(function(){
  var intervalId;
  var timer = 6;
  var correctCounter = 0;
  var incorrectCounter = 0;
  var unAnsweredCounter = 0;
  var userInput = null;

  var triviaCollection = [
    { question: "What is the most spoken language in the world?",
      choices:['English','Chinese','Farsi','Hendi'],
      correctAnswer:'Chinese'
    },
    { question: "What kind of animal did Bill Clinton have in office?",
      choices:['A dog','A bird','A chicken','A cat names Socks'],
      correctAnswer:'A cat names Socks'
    },
    { question: "Which planet has the most moons?",
      choices:['Earth','Jupiter','Mars','Uranus'],
      correctAnswer:'Jupiter'
    },
    { question: "What is the nickname for Purdue's sports teams?",
      choices:['The Boilermakers','Perdue chicken','Purde','Hen'],
      correctAnswer:'The Boilermakers'
    }
  ];

  function questionAnswers(){
    for(var j=0; j < triviaCollection.length; j++){
      $('.container_body').append('<p class="question">' + triviaCollection[j].question + '</p>');
      var formTag1 = $('<form>');
      formTag1.addClass('answerlist');
      $('.container_body').append(formTag1);
      for(var i=0; i< triviaCollection[j].choices.length; i++){
        $('.answerlist').eq(j).append('<input type="radio" data-status="unchecked" name="choice" value="' + triviaCollection[j].choices[i] + '"class="answers">' + triviaCollection[j].choices[i]);
      }
    }
  };

  function finalPage(){
    $("#timer").remove();
    $('.container_body').empty();
    var answerStatus = $("<div>").addClass("status");
    $('.container_body').append(answerStatus);
    $('.status').append('<p class="finished">');
    $('.finished').text("All Done!");
    $('.status').append('<p class="correctCounter"> The number of correct answeres: '+ correctCounter);
    $('.status').append('<p class="incorrectCounter">The number of incorrect answeres: '+ incorrectCounter);
    $('.status').append('<p class="unAnsweredCounter">The number of unanswered: '+ unAnsweredCounter);
    $('.container_body').append('<button type="button" id="startOver" class="btn btn-primary">START OVER</button>');
    $('#startOver').on("click", function(){
      $('.container_body').empty();
      $('.container_body').append('<h4 id="timer">Timer will start shortly</h4>');
      runTimer();
      questionAnswers();
    });
  };

  $('#start').on('click', function(){
    $("#start").remove();
    runTimer();
    questionAnswers();
  });

  $('.container_body').on('click', '.answers', function(){
    $(this).attr('data-status', 'checked');
  });

  function gameStatus(){
    for(var j=0; j< triviaCollection.length; j++){
      // for (var i=0; i< triviaCollection[j].choices.length; i++){
        // console.log(triviaCollection[j].choices.length);
        if ($('.answers')[j].getAttribute('data-status') === 'checked'){
          // console.log('>>>>>>>>>>>>>'+ $('.answers')[i]);
          if ($('.answers')[j].getAttribute('value') === triviaCollection[j].correctAnswer){
            console.log('>>>>>>>>correctCounter: ' + correctCounter);
            correctCounter++;
          }else{
            console.log('+++++++++++incorrectCounter: ' + incorrectCounter);
            incorrectCounter++;
          }
        }else{
          console.log('---------------unAnsweredCounter: ' + unAnsweredCounter);
          unAnsweredCounter++;
        }
      // }
    }
    return correctCounter, incorrectCounter, unAnsweredCounter;
  };

  function decrement(triviaCollection){
    timer--;
    $("#timer").html("<h4> Time remaining: " + timer + " seconds </h4>");
    if(timer === 1){
      gameStatus();
      if(timer === 1){
        finalPage();
        clearCash();
      }
    }
  };

  function runTimer(){
    intervalId = setInterval(decrement, 1000);
  };

  function clearingInterval(){
    intervalId = clearInterval(intervalId);
  };
  
  function clearCash(){
    clearingInterval();
    timer = 6;
    correctCounter = 0;
    incorrectCounter = 0;
    unAnsweredCounter = 0;
    userInput = null;
  };
});
