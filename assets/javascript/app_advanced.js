$(function(){
  var intervalId;
  var timer = 5;
  var timerRunning = false;
  var questionCounter = 0;
  var answerCounter = 0;
  var clicked = false;
  var trivaCollection = [
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
    },
    { question: "What does NASA stand for?",
      choices:['National Aeronautics and Space Administration','National Administration and Space Admission','National Aeronautics and Space Admission', 'All'],
      correctAnswer:'National Aeronautics and Space Administration'
    }
  ];
  function getChoices(){
    $('.list-group').remove();
    var listTag = $("<ul>");
    listTag.addClass("list-group");
    $('.container_body').append(listTag);
    for(var choice=1; choice<=4; choice++){
      var choicesTag = $("<li>");
      choicesTag.addClass("list-group-item");
      choicesTag.attr("id", ("choiceNumber"+choice));
      $('.list-group').append(choicesTag);
      $(("#choiceNumber"+choice)).text(trivaCollection[questionCounter].choices[choice-1]);
      $(("#choiceNumber"+choice)).addClass('hoverOut');
    }
  };
  function getQuestions(counter){
    if (counter < trivaCollection.length){
      $('.question1').text(trivaCollection[counter].question);
      getChoices();
    }else {
      console.log('Game Over!');
    }
  };
  function time_out_answer(){
    $('.container_body').remove();
    var answerStatus = $("<p>");
    answerStatus.addClass("timeout");
    $('.timeout').append(answerStatus);
    $('.timeout').text("Out of Time!");
    var correctAnswer = $("<p>");
    answerStatus.addClass("correctAnswer");
    $('.correctAnswer').append(correctAnswer);
    $('.correctAnswer').text("The Correct Answer was: " + trivaCollection[questionCounter].correctAnswer);
  }
  function decrement(trivaCollection){
    timer--;
    $("#timer").html("<h4> Time remaining: " + timer + " seconds </h4>");
    if(timer === 0){
      timer = 5;
      // time_out_answer();
      getQuestions(questionCounter++);
    }
  };
  function runTimer(){
    intervalId = setInterval(decrement, 1000);
  };
  runTimer();
  $('#start').click(function(){
    $("#start").remove();
    var questionTag = $("<p>");
    questionTag.addClass("question1");
    $('.container_body').append(questionTag);
    $('.question1').text(trivaCollection[0].question);
    getChoices();
  });
  function correct_answer_page(){
    $('.container_body').remove();
    var answerStatus = $("<p>");
    answerStatus.addClass("correct");
    $('.correct').append(answerStatus);
    $('.correct').text("Correct!");
    // TODO: need to add the image
  }
  function wrong_answer_page(){
    $('.container_body').remove();
    var answerStatus = $("<p>");
    answerStatus.addClass("nope");
    $('.nope').append(answerStatus);
    $('.nope').text("Nope!");
    var correctAnswer = $("<p>");
    answerStatus.addClass("correctAnswer");
    $('.correctAnswer').append(correctAnswer);
    $('.correctAnswer').text("The Correct Answer was: " + trivaCollection[questionCounter].correctAnswer);
    // TODO: need to add the image
  }
  // TODO: to hover over choices
  $('li').hover(function(){
    $('li').addClass('hoverIn').removeClass('hoverOut');
    $('li').live("click", function(){
      clicked = true;
      //TODO show if that is s a correct answer page else wrong answer page
        }, // TODO: just show the correct answer page
      );
    }, function(){
      $('li').removeClass('hoverIn').addClass('hoverOut');
  });
});
