console.log('hello');

const questions = [

    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: "false" },
            { text: "Blue whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: "false" },
            { text: "Blue whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "shark", correct: "false" },
            { text: "Blue whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "shark", correct: "false" },
            { text: "Blue whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
];

const questionBtn = document.querySelector('#question');
const answerBtn = document.querySelector('.answers');
const nextBtn = document.querySelector('.next-btn');

let currQustIndex = 0;
let score = 0;

function startQuiz() {
    currQustIndex = 0;
    score = 0;
    nextBtn.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currQustIndex];
    let questionNo = currQustIndex +1;
    questionBtn.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
    });
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

startQuiz();