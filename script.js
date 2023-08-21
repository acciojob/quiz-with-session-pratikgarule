// Check if session storage is supported by the browser
if (typeof sessionStorage !== 'undefined') {
  // Retrieve the saved quiz progress from session storage
  var quizProgressString = sessionStorage.getItem('progress');
  if (quizProgressString) {
    var quizProgress = JSON.parse(quizProgressString);
    // Set the user's selected answers based on the saved progress
    var userAnswers = quizProgress.selectedAnswers;
  } else {
    // Initialize the quiz progress if no saved progress is found
    var quizProgress = {
      currentQuestion: 0,
      selectedAnswers: []
    };
    // Initialize userAnswers array with empty values
    var userAnswers = Array(questions.length).fill('');
  }
} else {
  // Session storage is not supported
  // Handle the case accordingly (e.g., use alternative storage mechanism)
}

// Display the quiz questions and choices
var questionsElement = document.getElementById("questions");

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
  // Calculate the score based on the user's answers
  var score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  // Display the score on the page
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "Your score is " + score + " out of 5.";

  // Store the score in local storage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('score', score);
  } else {
    // Local storage is not supported
    // Handle the case accordingly (e.g., use alternative storage mechanism)
  }
});