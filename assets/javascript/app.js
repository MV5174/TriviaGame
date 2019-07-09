
//Global Variables
var time = 10;
var intervalId;
var timeUp = false;
$("#timer").text(time);
//Array with Questions
var questions = ["Which one of these Champions is an assassin?", "Which one of these champions is a support?"];
//Array with Answers
var answers = [answers1, answers2];
var answers1 = ["Zed", "Trundle", "Lucian", "Syndra"];
var answers2 = ["Yasuo", "Malphite", "Pantheon", "Thresh"];
//Timer for questions
if (time === 0){
    alert("Time is up!!!");
    timeUp = true;
    time = 0;
    } 
    else {
     intervalId = setInterval(count, 1000);
}
function count(){
    time--;
    $("#timer").text(time);
}
//If the player selects the correct answer, show a screen congratulating them for choosing the right option.
console.log(questions);
//After a few seconds, display the next question

//If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

//If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
