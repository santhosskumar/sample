const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which keyword is used to declare a constant variable in javascript?",
    a: "var",
    b: "let",
    c: "static",
    d: "const",
    correct: "d",
  },
  {
    question: "What is the output of `console.log(typeof null)`?",
    a: "object",
    b: "null",
    c: "undefined",
    d: "string",
    correct: "a",
  },
  {
    question: "Which  of the following is not a primitive data type in JavaScript?",
    a: "String ",
    b: "Number",
    c: "Boolean",
    d: "Object",
    correct: "d",
  },
  {
    question: "What does `===` operator do in JavaScript?",
    a: "Compares  two values for equality after type conversion.",
    b: "Compares  two values without type conversion.",
    c: "Compares  two values and assigns them if they are equal.",
    d: "Checks  if both values are of the same type.",
    correct: "b",
  },
  {
    question: "What is the purpose of the `bind()` method in JavaScript?",
    a: "It  binds an event to a DOM element.",
    b: "It  creates a new function that, when called, has its `this` keyword set to the provided value.",
    c: "It creates a copy of the function with the same scope.",
    d: "It merges two objects into one.",
    correct: "b",
  },
  {
    question: "output of `const arr = [1, 2, 3];const result = arr.map(num => {return num * 2});console.log(result);`",
    a: "[1, 2, 3]",
    b: "[2, 4, 6]",
    c: "[1, 4, 9]",
    d: "[3, 6, 9]",
   correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  document.getElementById("feedback").innerHTML = "";
};

function checkAnswer() {
    let selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            document.getElementById("feedback").innerHTML = "This is the Correct answer!";
            document.getElementById("feedback").style.color = "#00ff00";
        }

        else {
            document.getElementById("feedback").innerHTML = "This is the Wrong answer!";
            document.getElementById("feedback").style.color = "#ff0000";
        }
    }
}
answerElements.forEach(answerElement => {
    answerElement.addEventListener('change', checkAnswer);
});

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=5;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz(); 
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/50 questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
