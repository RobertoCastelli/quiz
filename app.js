// INIT
let score = 0;
let currentQuestion = 0;

// GET VARIABLES FROM HTML
let btnStart = document.getElementById('btnStart');
let btnQuaffle = document.getElementById('btnQuaffle');
let inputResponse = document.getElementById('inputResponse');
let main = document.querySelector('.main');
let quiz = document.getElementById('quiz');
let counter = document.getElementById('counter');
let time = document.getElementById('time');
let gif = document.getElementById('gif');
let quizTitle = document.getElementById('quizTitle');

// BTN START GAME
btnStart.addEventListener('click', () => {
    main.setAttribute('class', 'animation');
    btnStart.style.display = 'none';
    alert(guide);
    loadQuestion();
});

// BTN ANSWER
btnQuaffle.addEventListener('click', () => {
    let correctAnswer = questionsArray[currentQuestion].correctAnswer;

    if (correctAnswer === inputResponse.value) {
        score++;
        inputResponse.value = '';
        loadImage('right');
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    
    } else {
        console.log('wrong');
        inputResponse.value = '';
        loadImage('wrong');
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    }
});

function nextQuestion() {
    const isQuestionOver = (questionsArray.length - 1) === currentQuestion;
    if (isQuestionOver) {
        endGame();  
    } else {
        currentQuestion ++;
        loadImage('default');
        loadQuestion();
    }
}

function loadQuestion() {
    let question = questionsArray[currentQuestion].question;
    counter.innerText = currentQuestion + 1;
    quiz.innerText = question;
}

function endGame() {
   
    if (score >= 9) {
        quizTitle.innerText = 'You did it!';
        inputResponse.style.visibility = 'hidden';
        btnQuaffle.style.visibility = 'hidden';
        quiz.innerText = `Your Q.I. is ${score * 13}.`;
        loadImage('endWin');
        quiz.innerText = textEndGame; 
    } else {
        quizTitle.innerText = 'Try again!';
        inputResponse.style.visibility = 'hidden';
        btnQuaffle.style.visibility = 'hidden';
        quiz.innerText = `Your Q.I. is ${score * 13}.`;
        loadImage('endLose');
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function loadImage(status) {
    switch (status) {
        case 'right':
            gif.src = 'https://media.giphy.com/media/l1J9wXoC8W4JFmREY/giphy.gif';
            break;
        case 'wrong':   
            gif.src = 'https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif';
            break;
        case 'endWin':   
            gif.src = 'https://media.giphy.com/media/mJhRSYXxzq6CA0ldkh/giphy.gif';
            break;
        case 'endLose':   
            gif.src = 'https://media.giphy.com/media/cfskn2Ozn7j9K/giphy.gif';
            break;
        default:
            gif.src = '../img/you.jpg';
    }

}


