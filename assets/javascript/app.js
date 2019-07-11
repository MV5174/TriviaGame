window.onload = function (){
//Global Variables
var time = 10;
var endTime = 5;
var intervalId;
var timeUp = false;
var chosenQuestion;
var correctAnswers = 0;
var incorrectAnswers = 0;
var answered = 0;
$("#timer").text(time);
//Array with Questions
var questions = ["Which one of these Champions is an assassin?", "Which one of these Champions is a support?"];
//Array with Answers
var answers = [answers1, answers2];
var answers1 = ["Zed", "Trundle", "Lucian", "Syndra"];
var answers2 = ["Yasuo", "Malphite", "Pantheon", "Thresh"];
//Timer for questions
function timer(){
if (time === 0){
    alert("Time is up!!!");
    timeUp = true;
    pickQuestion();
    } 
     intervalId = setInterval(count, 1000);

}
timer();
function count(){
    if (time === 0){
        
        pickQuestion();
        time = 10;
        }
    else{
        time--;
    $("#timer").text(time);
    }
}
function endCount(){
    if (endTime === 0){
        alert("omg");
        timeUp = true;
        pickQuestion();
        endTime = 10;
        }
    else{
        endTime--;
    $("#timer").text(endTime);
}}
function pickQuestion(){
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(chosenQuestion);
    console.log(questions);
    $("#questionDisplay").text(chosenQuestion);
    pickAnswers();
    
    timeUp = false;
}
function pickAnswers(){
    if (questions.indexOf(chosenQuestion) === 0){
        $("#q1").text(answers1[0]);
        $("#q2").text(answers1[1]);
        $("#q3").text(answers1[2]);
        $("#q4").text(answers1[3]);
    }  if (chosenQuestion === "Which one of these Champions is a support?"){
        $("#q1").text(answers2[0]);
        $("#q2").text(answers2[1]);
        $("#q3").text(answers2[2]);
        $("#q4").text(answers2[3]);
    }
}
function endGame(){
    $(".btn").toggle();
    $("#questionDisplay").toggle();
    var results = $("<div>")
    results.text("Correct Answers: " + correctAnswers + " Incorrect Answers: " + incorrectAnswers);
    $("#endDisplay").append(results);
    correctAnswers = 0;
    incorrectAnswers = 0;
    answered = 0;
    endCount();
    if (timeUp){
        questions.splice(2, 0, "Which one of these Champions is an assassin?", "Which one of these Champions is a support?");
        $(".btn").toggle();
        $("#questionDisplay").toggle();
        pickQuestion();
        alert("omg");
        $(results).remove()
    }
}
$(".btn").on("click", function click(){
    if ($(this).is("#q1btn") && questions.indexOf(chosenQuestion) === 0 || $(this).is("#q4btn") && chosenQuestion === "Which one of these Champions is a support?"){
        correctAnswers++;
        answered++;
        questions.splice(questions.indexOf(chosenQuestion), 1);
        pickQuestion();
        console.log("this is right")
        time = 10;
    } else {
        incorrectAnswers++;
        answered++;
        pickQuestion();
        
        time = 10;
        console.log("wrong");
    }
    if (answered === 2){
        time = 0;
        endGame();
    
    }
})
pickQuestion();
//If the player selects the correct answer, show a screen congratulating them for choosing the right option.
console.log(questions);
console.log(questions.indexOf(chosenQuestion));
//After a few seconds, display the next question

//If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

//If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
};