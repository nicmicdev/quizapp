//DEFINING GLOBAL VARIABLES
let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio ('audio/correct.mp3');
let AUDIO_FAIL = new Audio ('audio/wrong.mp3');


//HELP FUNCTIONS
function getElement(id) {
    return document.getElementById(id);
}

//MAIN FUNCTIONALITY
function init() {
    getElement("all-questions2").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        //show endscreen
        getElement("end-screen").classList.remove('d-none');
        getElement("play-screen").classList.add('d-none');
        getElement("all-questions1").innerHTML = questions.length;
        getElement("correct-answers-amount").innerHTML = correctAnswers; 
        getElement('header-image').src = 'img/cup.png';


    } else { // show question

        let percent = (currentQuestion +1) / questions.length;
        percent = Math.round(percent * 100);

        getElement('progressbar').style = `width: ${percent}%`;
        getElement('progressbar').innerHTML = `${percent} %`;

        console.log ('Fortschritt ', percent );

        let question = questions[currentQuestion];

        getElement("current-question").innerHTML = currentQuestion + 1;
        getElement("questiontext").innerHTML = question['question'];
        getElement("answer_1").innerHTML = question['answer_1'];
        getElement("answer_2").innerHTML = question['answer_2'];
        getElement("answer_3").innerHTML = question['answer_3'];
        getElement("answer_4").innerHTML = question['answer_4'];
    }
}

function answer(selection) {                         // selection = string of id as parameter
    let question = questions[currentQuestion];

    console.log('Current question is ', question);  //looging question

    console.log('Selected answer is ', selection);   //logging selection

    let selectedQuestionNumber = +selection.slice(-1);  //getting last char of selection as number

    console.log('Selected Question number ist ', selectedQuestionNumber);  //logging answer as number

    console.log('Correct answer ist ', question['right_answer']);  //logging correct answer

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('RICHTIG');
        getElement(selection).parentNode.classList.add('bg-success');
        correctAnswers++;
        AUDIO_SUCCESS.play();
    } else {
        console.log('FALSCH');
        getElement(selection).parentNode.classList.add('bg-danger');
        getElement(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    getElement('next-button').disabled = false;
    getElement('question-container').classList.add('pointer-events-none');
}

function nextQuestion() {
    currentQuestion++;
    getElement('next-button').disabled = true;
    resetAnswerButtons();
    getElement('question-container').classList.remove('pointer-events-none');
    showQuestion();
}

function resetAnswerButtons() {
    getElement('answer_1').parentNode.classList.remove('bg-danger');
    getElement('answer_1').parentNode.classList.remove('bg-success');
    getElement('answer_2').parentNode.classList.remove('bg-danger');
    getElement('answer_2').parentNode.classList.remove('bg-success');
    getElement('answer_3').parentNode.classList.remove('bg-danger');
    getElement('answer_3').parentNode.classList.remove('bg-success');
    getElement('answer_4').parentNode.classList.remove('bg-danger');
    getElement('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    getElement('header-image').src = 'img/pitch.jpg';
    currentQuestion = 0;
    correctAnswers = 0;
    getElement("end-screen").classList.add('d-none');
    getElement("play-screen").classList.remove('d-none');
    init();
}