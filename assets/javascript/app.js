//1- save all questions and their answers in an object
//2- need a timer for each question of 30 sec
//3- need to iterate over keys and update the questin with key and update choises with values
//4- need click event for each answer
//5- update html with answer status of the answer and a picture
//6- show the correct answer even if user didin't select anything and show another question auto
//7-set timeout 30 sec for each question
//8- hoverin and out answers when user hover over answers and then make a circle around mouse when user wanna click on answer
var obj = {
  "What French sculptor created the Statue of Liberty?": ['Frédéric Auguste Bartholdi','Pierre Affre','André Arbus','Albert Bartholomé'],
  "What is the most spoken language in the world?": ['English','Chinese','Farsi','Hendi'],
  "What kind of animal did Bill Clinton have in office?": ['A dog','A bird','A chicken','A cat names Socks'],
  "Which planet has the most moons?": ['Earth','Jupiter','Mars','Uranus'],
  "What is the nickname for Purdue's sports teams?": ['The Boilermakers','Perdue chicken','Purde','Hen'],
  "What does NASA stand for?": ['National Aeronautics and Space Administration','National Administration and Space Admission','National Aeronautics and Space Admission', 'All']
}
// window.load = function(){
//   ()
// }
var intervalId;
var timer = 30;
var timerRunning = false;
var questionCounter = 0;
var answerCounter = 0;
var correctAnswer = null;
function correctAnswerPage(){
}
function wrongAnswerPage(){
  $('.container_body').html('<p>Nope!</p><p> The correct Answer was:' + correctAnswer + '</p><img src='
    + "assets/images/victory_image" +'>')
}
function getCorrectAnswers(object, counter){
  if (counter === 0){
    correctAnswer = 'Frédéric Auguste Bartholdi'
  } else if (counter === 1){
      correctAnswer = 'Chinese'
  } else if (counter === 2){
    correctAnswer = 'A cat names Socks'
  }else if (counter === 3){
  correctAnswer = 'Jupiter'
  }else if (counter === 4){
    correctAnswer = 'The Boilermakers'
  }else if (counter === 4){
    correctAnswer = 'National Aeronautics and Space Administration'
  }else{
    console.log('Wrong answer!')
  }
}
function getAnswers(object, counter, aCounter){
  // TODO: need to get the answers based on the getQuestions()
  //console.log(Object.values(obj));
  //console.log(Object.values(obj)[0][1]);
  console.log(Object.values(obj)[counter][aCounter]);
}
function getQuestions(object, counter){
  console.log(Object.keys(obj)[counter]);
  question = Object.keys(obj)[counter];
  $('.question1').text(question);
  //getAnswers(obj, counter++, answerCounter++);
}
function decrement(){
  timer--;
  $("#timer").html("<h4> Time remaining: " + timer + " seconds </h4>");
  if(timer === 0){
    //TODO: go to the next question
    timer = 30;
    getQuestions(obj, questionCounter++);
  }
}
function runTimer(){
  intervalId = setInterval(decrement, 1000);
}
runTimer();
