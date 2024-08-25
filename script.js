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
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currQustIndex];
    let questionNo = currQustIndex + 1;
    questionBtn.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

resetState = () => {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    if (isCorrect === "true") {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  if(currQustIndex < questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
})


handleNextBtn = () =>{
    currQustIndex++;
    if(currQustIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

showScore = () =>{
    resetState();    
    questionBtn.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = 'Replay'; 
    nextBtn.style.display = 'block';
}

startQuiz();