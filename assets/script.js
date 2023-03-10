var homePage = document.querySelector(".home-page");
var questionsPage = document.querySelector(".questions-page");
var finalScorePage = document.querySelector(".final-score-page");
var highScorePage = document.querySelector(".high-score-page");

var question_field = document.getElementById("quiz-question");
var answer_btn_1 = document.getElementById("answer-btn-1");
var answer_btn_2 = document.getElementById("answer-btn-2");
var answer_btn_3 = document.getElementById("answer-btn-3");
var answer_btn_4 = document.getElementById("answer-btn-4");

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);

var curr_question = 0;
var correct_answers = 0;

var timer;
var timer_seconds = 60;
var quiz_timer = document.querySelector(".quiz-timer");
quiz_timer.textContent = "Time: " + timer_seconds;

function startGame() {

    homePage.style.display = "none";
    questionsPage.style.display = "block";

    checkQuestion(-1);

    answer_btn_1.addEventListener("click", function () { checkQuestion(1) });
    answer_btn_2.addEventListener("click", function () { checkQuestion(2) });
    answer_btn_3.addEventListener("click", function () { checkQuestion(3) });
    answer_btn_4.addEventListener("click", function () { checkQuestion(4) });

    timer = setInterval(function () {
        quiz_timer.textContent = "Time: " + timer_seconds;
        if (timer_seconds <= 0) {
            clearInterval(timer);
            showScore();
        }
        timer_seconds--;
    }, 1000);
}

function checkQuestion(button_clicked) {

    correct_index = questions[curr_question].correct_answer + 1;
    if (correct_index == button_clicked) {
        correct_answers++;
    }
    else if (button_clicked != -1) {
        timer_seconds -= 10;
    }

    if (button_clicked != -1) {
        curr_question++;
    }

    if (curr_question < questions.length) {
        question_field.textContent = questions[curr_question].question;
        answer_btn_1.textContent = "1. " + questions[curr_question].answers[0];
        answer_btn_2.textContent = "2. " + questions[curr_question].answers[1];
        answer_btn_3.textContent = "3. " + questions[curr_question].answers[2];
        answer_btn_4.textContent = "4. " + questions[curr_question].answers[3];
    } else {
        showScore()
    }

}

function showScore() {
    clearInterval(timer);

    questionsPage.style.display = "none";
    finalScorePage.style.display = "block";


    final_score_field = document.getElementById("final-score");
    final_score_field.textContent = "Your final score is " + correct_answers;
}

const questions = [
    {
        question: "String values must be enclosed within___when being assigned to variables.",
        correct_answer: 2,
        answers: ["commas", "curly brackets", "quotes", "parentheses"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correct_answer: 3,
        answers: ["Javascript", "terminal/bash", "for loops", "console.log"]
    },
    {
        question: "Arrays in JavaScript can be used to store____",
        correct_answer: 3,
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        question: "The condition in an if / else statement is enclosed within____",
        correct_answer: 1,
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"]
    }
];