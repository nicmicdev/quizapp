//DEFINING GLOBAL VARIABLES
let currentQuestion = 0;


//HELP FUNCTIONS
function getElement(id) {
    return document.getElementById(id);
}

//MAIN FUNCTIONALITY
function init(){
    getElement("all-questions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    getElement("questiontext").innerHTML = question['question'];
    getElement("answer_1").innerHTML = question['answer_1'];
    getElement("answer_2").innerHTML = question['answer_2'];
    getElement("answer_3").innerHTML = question['answer_3'];
    getElement("answer_4").innerHTML = question['answer_4'];
    
}

function answer(selection){                         // slection = string of id as parameter
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
    } else {
        console.log('FALSCH');
        getElement(selection).parentNode.classList.add('bg-danger');
        getElement(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
}