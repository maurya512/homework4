// Accessing HTML elements(classes/tags) using querySelector
var quizEl = document.querySelector("#quizPage");
// console.log(quizEl);
var resultEl = document.querySelector("result");
var finalScoreEl = document.querySelector("finalScore");
var gameOver = document.querySelector("gameover");
var questionsEl = document.querySelector("questions");
var quizTimerEl = document.querySelector("timer");
var startBtn = document.querySelector("start-btn");
var startQuiz = document.querySelector("mainpage");
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

var score = 0;
var timeLeft = 60;
var correctAns;
var timerInterval;

