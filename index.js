var readlineSync = require('readline-sync');

var score = 0;

//Welcome user
var userName = readlineSync.question("What's your name? ");
console.log("\nWelcome " + userName + "! to the Bollywood Quiz!\n" + "Please type only option alphabet as an answer.\n")

//high scorers data
function highScorers() {
  console.log("\n1. Raj ---> score: 4");
  console.log("\n2. Aman ---> score: 3")
}

//Function for comparing user's answer 
function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Correct!")
        score++;
    } else {
        console.log("Wrong answer!")
    }
      console.log("Your score is: " + score);
      console.log("---------------------------------------------------------\n");
}

//questions
var questionOne = {
  question : "What is the name of Sholay' s iconic villain?\n"+
             "a. Kalia\n" +
             "b. Shakaal\n" +
             "c. Gabbar Singh\n" +
             "d. Bulla\n",
  answer : "c"
}

var questionTwo = {
  question : "Who directed Dil Chahta Hai?\n"+
             "a. Zoya Akhtar\n" +
             "b. Aamir Khan\n" +
             "c. Farhan Akhtar\n" +
             "d. Reema Kagti\n",
  answer : "c"
}

var questionThree = {
  question : "In Om Shanti Om, what does Deepika Padukone's character Shantipriya do?\n"+
             "a. Singer\n" +
             "b. Actress\n" +
             "c. Journalist\n" +
             "d. Lawyer\n",
  answer : "b"
}

var questionFour = {
  question : "Which movie is this groundbreaking line from:'Teja main hoon, Mark idhar hai'\n"+
             "a. Hera Pheri\n" +
             "b. Welcome\n" +
             "c. Maine Pyaar Kiya\n" +
             "d. Andaz Apna Apna\n",
  answer : "d"
}

var questionFive = {
  question : "Which bike got famous with the release of movie Dhoom?\n"+
             "a. Hayabusa\n" +
             "b. Streettriple\n" +
             "c. Duke\n" +
             "d. Pulsar\n",
  answer : "a"
}

var questionSix = {
  question : "Which actor played the role of Circuit in Munna Bhai MBBS?\n"+
             "a. Shahrukh Khan\n" +
             "b. Arshad Warsi\n" +
             "c. Varun Dhawan\n" +
             "d. Salman Khan\n",
  answer : "b"
}


//array of questions
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];


//loop for uninterrupted game
for( var i=0; i<questions.length ; i++) {
  if(score === 2) {
    console.log("YAY!!! You have reached LEVEL 1.\n" + "\n---------------------------------------------------------\n");
  }
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log("We are out of Questions.\n" + "\nYour final score is : " + score + "\n\nIf your score is higher than below high scorers, then please send a screenshot to pushpinder.singh@duneshift.com and it will be updated.")

highScorers();


