// Accessing HTML elements(classes/tags) using querySelector
var quizEl = document.querySelector("#quizPage");
// console.log(quizEl);
var resultEl = document.querySelector("#result");
var finalScoreEl = document.querySelector("#finalScore");
var gameOver = document.querySelector("#gameover");
var questionsEl = document.querySelector("#questions");
var quizTimerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var startQuizDiv = document.querySelector("#mainpage");
var highScoreEl = document.querySelector("#highScore");
var highScorePageEl = document.querySelector("#highScorePage");
var highScoreInput = document.querySelector("#userInitialInput");
var highScoreDispaly = document.querySelector("#highScore-intials");
var endGameBtn = document.querySelector("#endGame");
var submitScoreBtn = document.querySelector("#submitScore");
var displayHighScore = document.querySelector("#highScore-score");
var btnA = document.querySelector("#btn-a");
var btnB = document.querySelector("#btn-b");
var btnC = document.querySelector("#btn-c");
var btnD = document.querySelector("#btn-d");

// array of objects for questions 

var quizQuestions = [{
    q: "What does HTML stand for?", optionA: "Hyper Text Markup Language", optionB: "Hyper Type Makeup Language", optionC: "HyperLinks Text Markup Language", optionD: "Happy Text Messaging Language", correctAnswer: "A"
},
{
    q: "What does CSS stand for?", optionA: "Cascading Shaping Sheets", optionB: "Creating Style Sheets", optionC: "Cascading Style Sheets", optionD: "Creating Simple Style", correctAnswer: "C"
},
{
    q: "Which of the following is a CSS Framework?", optionA: "Bootcamp", optionB: "StarGaze", optionC: "Bootstrap", optionD: "My SQL", correctAnswer: "C"
},
{
    q: "What does SQL stand for?", optionA: "Structured Question Language", optionB: "Standard Query Langauge", optionC: "Strong Question Language", optionD: "Structured Query Language", correctAnswer: "D"
},
{
    q: "What HTML attribute references an external JavaScript file?", optionA: "href", optionB: "src", optionC: "class", optionD: "index", correctAnswer: "B"
},
{
    q: "When is localStorage data cleared?", optionA: "No Expiration Time", optionB: "On Page Reload", optionC: "On browser close", optionD: "On Console Close", correctAnswer: "A"
},
{
    q: "What does DOM stand for?", optionA: "Document Object Model", optionB: "Display Object Management", optionC: "Digital Ordinance Model", optionD: "Desktop Objective Method", correctAnswer: "A"
},
{
    q: "What does CDN stand for?", optionA: "Content Delivery Network", optionB: "Cascading Delivery Network", optionC: "Creative Driving Network", optionD: "Content Discovery Network", correctAnswer: "D"
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
    if (currentQuestionIndex === finalQuestionIndex) {
        return userScore();
    }
    var currentQuestion = quizQuestions
    [currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.q + "<p>";
    btnA.innerHTML = currentQuestion.optionA;
    btnB.innerHTML = currentQuestion.optionB;
    btnC.innerHTML = currentQuestion.optionC;
    btnD.innerHTML = currentQuestion.optionD;
};

// a function to start the quiz
function startQuiz() {
    gameOver.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuiz();

    // set the timer 
    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimerEl.textContent = "Time Remaining: " + timeLeft;

        // check if the timer is 0
        // if 0 show score
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            userScore();
        }
    }, 1000);
    quizEl.style.display = "block";
}

// a function to show the final score of the user at the end of the quiz 
function userScore() {
    quizEl.style.display = "none";
    gameOver.style.display = "flex";
    clearInterval(timerInterval);
    highScoreInput.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct ";
}

// a function that submits the score to a local storage 
submitScoreBtn.addEventListener("click", function highScore() {

    // if the user left the space blank or hit submit by mistake the program should remind them 
    if (highScoreInput.value === "") {
        alert("The initials cannot be left blank!");
        return false;
    }

    // if the user entered numericals as initials remind the user in some way
    else if (parseInt(highScoreInput.value)) {
        alert("The initials cannot be numbers!");
        return false;
    }
    else {
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreInput.value.trim();
        var currentUserScore = {
            name: currentUser,
            score: score
        };

        gameOver.style.display = "none";
        highScoreEl.style.display = "flex";
        highScorePageEl.style.display = "block";
        endGameBtn.style.display = "flex";

        savedHighScores.push(currentUserScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScore();

    }
});

// a function to generate high scores 
function generateHighScore() {
    highScoreDisplayName.innerHTML = "";
    highScoreDisplayScore.innerHTML = "";

    var highScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (var i = 0; i < highScores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highScores[i].name;
        newScore.textContent = highScores[i].score;
        highScoreDisplayName.appendChild(newName);
        highScoreDisplayScore.appendChild(newScore);
    }
}


// a function to show the high score of the user 
function showHighScore() {
    startQuizDiv.style.display = "none";
    gameOver.style.display = "none";
    highScoreEl.style.display = "flex";
    highScorePageEl.style.display = "block";
    endGameBtn.style.display = "flex";

    generateHighScore();
}


// a function that clears the high score of the user from local storage once hit clear the 
function clearScore() {
    // clears the local storage 
    window.localStorage.clear();

    // clears the value stored at user high score display name by assigning it an empty string
    highScoreDisplayName.textContent = "";

    // clears the value store at user high score display socre by assigning it an empty string 
    highScoreDisplayScore.textContent = "";
}

// a function that let's the user to replay the quiz 
// reseting all the values to their original selves 
function replayQuiz() {
    highScoreEl.style.display = "none";
    gameOver.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}

// a function to check correct answers
function checkAnswer(answer) {
    correctAns = quizQuestions[currentQuestionIndex].correctAnswer;

    // if the argument inside the function is the correct answer for that question & current question is not the final question 
    // add +1 to the score
    if (answer === correctAns && currentQuestionIndex !== finalQuestionIndex) {
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
    else if (answer !== correctAns && currentQuestionIndex !== finalQuestionIndex) {
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

// the button that will start the quiz
startBtn.addEventListener("click", startQuiz);