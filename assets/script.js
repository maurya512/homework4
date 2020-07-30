// Accessing HTML elements(classes/tags) using querySelector
var quizEl = document.querySelector("#quizPage");
// console.log(quizEl);
var resultEl = document.querySelector("result");
var finalScoreEl = document.querySelector("finalScore");
var gameOver = document.querySelector("gameover");
var questionsEl = document.querySelector("questions");
var quizTimerEl = document.querySelector("timer");
var startBtn = document.querySelector("start-btn");
var startQuizDiv = document.querySelector("mainpage");
var highScoreEl = document.querySelector("highScore");
var highScorePage = document.querySelector("highScorePage");
var highScoreInput = document.querySelector("userInitialInput");
var highScoreDispaly = document.querySelector("#highScore-intials");
var endGameBtn = document.querySelector("endGame");
var submitScoreBtn = document.querySelector("submitScore");
var displayHighScore = document.querySelector("highScore-score");
var btnA = document.querySelector("#btn-a");
var btnB = document.querySelector("#btn-b");
var btnC = document.querySelector("#btn-c");
var btnD = document.querySelector("#btn-d");

// array of objects for questions 

var quizQuestions = [{
    q: "What does HTML stand for?", A: "Hyper Text Markup Language", B: "Hyper Type Makeup Language", C: "HyperLinks Text Markup Language", D: "Happy Text Messaging Language", correctAnswer: "a"
},
{
    q: "What does CSS stand for?", A: "Cascading Shaping Sheets", B: "Creating Style Sheets", C: "Cascading Style Sheets", D: "Creating Simple Style", correctAnswer: "c"
},
{
    q: "Which of the following is a CSS Framework?", A: "Bootcamp", B: "StarGaze", C: "Bootstrap", D: "My SQL", correctAnswer: "c"
},
{
    q: "What does SQL stand for?", A: "Structured Question Language", B: "Standard Query Langauge", C: "Strong Question Language", D:"Structured Query Language", correctAnswer: "d"
},
{
    q: "What HTML attribute references an external JavaScript file?", A: "href", B: "src", C: "class", D: "index", correctAnswer: "b"
},
{
    q: "When is localStorage data cleared?", A: "No Expiration Time", B: "On Page Reload", C: "On browser close", D: "On Console Close", correctAnswer: "a"
},
{
    q: "What does DOM stand for?", A: "Document Object Model", B: "Display Object Management", C: "Digital Ordinance Model", D: "Desktop Objective Method", correctAnswer: "a"
},
{
    q: "What does CDN stand for?", A: "Content Delivery Network", B: "Cascading Delivery Network", C: "Creative Driving Network", D: "Content Discovery Network", correctAnswer: "a"
},
];

var quizQuestions = [{
    q: "What does HTML stand for?", A: "Hyper Text Markup Language", B: "Hyper Type Makeup Language", C: "HyperLinks Text Markup Language", D: "Happy Text Messaging Language", correctAnswer: "a"
},
{
    q: "What does CSS stand for?", A: "Cascading Shaping Sheets", B: "Creating Style Sheets", C: "Cascading Style Sheets", D: "Creating Simple Style", correctAnswer: "c"
},
{
    q: "Which of the following is a CSS Framework?", A: "Bootcamp", B: "StarGaze", C: "Bootstrap", D: "My SQL", correctAnswer: "c"
},
{
    q: "What does SQL stand for?", A: "Structured Question Language", B: "Standard Query Langauge", C: "Strong Question Language", D:"Structured Query Language", correctAnswer: "d"
},
{
    q: "What HTML attribute references an external JavaScript file?", A: "href", B: "src", C: "class", D: "index", correctAnswer: "b"
},
{
    q: "When is localStorage data cleared?", A: "No Expiration Time", B: "On Page Reload", C: "On browser close", D: "On Console Close", correctAnswer: "a"
},
{
    q: "What does DOM stand for?", A: "Document Object Model", B: "Display Object Management", C: "Digital Ordinance Model", D: "Desktop Objective Method", correctAnswer: "a"
},
{
    q: "What does CDN stand for?", A: "Content Delivery Network", B: "Cascading Delivery Network", C: "Creative Driving Network", D: "Content Discovery Network", correctAnswer: "a"
},
];

var score = 0;
var timeLeft = 60;
var correctAns;
var timerInterval;
var currentQuestionIndex = 0;
var finalQuestionIndex = quizQuestions.length;

// a function that iterates through the array of objects containing the questions and generates the quiz

function generateQuiz() {
    gameOver.style.display = "none";
    // check if the current question is the last question! 
    // if so then return the score and end the quiz
    if(currentQuestionIndex === finalQuestionIndex) {
        return userScore();
    }
    var currentQuestion = quizQuestions
    [currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.q + "<p>";
    btnA.innerHTML = currentQuestion.A;
    btnB.innerHTML = currentQuestion.B;
    btnC.innerHTML = currentQuestion.C;
    btnD.innerHTML = currentQuestion.D;
};

// a function to start the quiz
function startQuiz() {
    gameOver.style.display="none";
    startQuizDiv.style.display="none";
    generateQuiz();

    // set the timer 
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimerEl.textContent = "Time Remaining: " + timeLeft;

        // check if the timer is 0
        // if 0 show score
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            userScore();
        }
    }, 1000);
    quizEl.style.display="block";
}

// a function to check correct answers
function checkAnswer(answer) {
    correctAns = quizQuestions[currentQuestionIndex].correctAnswer;

    // if the argument inside the function is the correct answer for that question & current question is not the final question 
    // add +1 to the score
    if(answer === correctAns && currentQuestionIndex !== finalQuestionIndex) {
        // add +1 to the score
        score++;

        // alert the user they're correct
        alert("Correct!");

        // jump to the next question
        currentQuestionIndex++;

        // generate the quiz again but current index updating 
        generateQuiz();
    }

    // else if the answer is not correct and current question is not the final question 
    // jump to the next question 
    // alert the user they're wrong
    else if(answer !== correctAns && currentQuestionIndex !== finalQuestionIndex) {
        // alert the user they're wrong
        alert("Wrong!");

        // jump to the next question
        currentQuestionIndex++;

        // generate the quiz again but current index updating
        generateQuiz();
    }
    // if the current question is the last question ask the question and then show the final score 
    else {
        userScore();
    }
    }

    // a function to show the final score of the user at the end of the quiz 
function userScore() {
    quizEl.style.display="none";
    gameOver.style.display="flex";
    clearInterval(timerInterval);
    highScoreInput.value= "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct ";
}

// a function that submits the score to a local storage 

// added an event to submit button with highScore as the callback function
submitScoreBtn.addEventListener("click", function highScore() {
    
    // if the user left the space blank or hit submit by mistake the program should remind them 
    if(highScoreInput.value="") {
        alert("The initials cannot be left blank!");
        return false;
    }

    // if the user entered numericals as initials remind the user in some way
    else if(parseInt(highScoreInput.value)) {
        alert("The initials cannot be numbers!");
        return false;
    }
    else{
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreInput.value.trim();
        var currentUserScore = {
            name: currentUser;
            score: score:
        };

        gameOver.style.display="none";
        highScoreEl.style.display="flex";
        highScorePage.style.display="block";
        endGameBtn.style.display = "flex";

        savedHighScores.push(currentUserScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        // a function to create high score? or a variable?

    }
});

