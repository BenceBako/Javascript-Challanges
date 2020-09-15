const quizData = [
    {
        question: 'Which is the hardest boss in DS3?',
        a: 'Nameless King',
        b: 'Champion Gundyr',
        c: 'Prince Lothric',
        d: 'Dancer of the Boreal Valley',
        correct: 'a'
    }, {
        question: 'Which is the hardest boss in Bloodborne?',
        a: 'Shadow of Yharnam',
        b: 'Father Gascoigne',
        c: 'Cleric Beast',
        d: 'Gehrman',
        correct: 'd'
    }, {
        question: 'Which is not an optional boss?',
        a: 'Nameless King',
        b: 'Deacons of the Deep',
        c: 'Champion Gundyr',
        d: 'Oceiros the Consumed King',
        correct: 'b',
    }, {
        question: 'Where are the Abyss Watchers found in?',
        a: 'Irythill Dungeon',
        b: 'Undead Settlement',
        c: 'Farron Keep',
        d: 'Kiln of the First Flame',
        correct: 'c',
    }, {
        question: 'Who is the god of war in DS3?',
        a: 'Nameless King',
        b: 'Kratos',
        c: 'Rah',
        d: 'Ancient Wyvern',
        correct: 'a',
    },
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit-btn');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;    
    b_text.innerText = currentQuizData.b;   
    c_text.innerText = currentQuizData.c;   
    d_text.innerText = currentQuizData.d;   
};

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        };
    });

    return answer;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        });
};

function resetQuiz() {
    quiz.innerHTML = ``;
};

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();
    
    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        };

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 class="scoreboard">You score is: ${score}/${quizData.length} </h2>` +
                             `<button onclick="location.reload()">Play again</button>`;
        };
    };
});
