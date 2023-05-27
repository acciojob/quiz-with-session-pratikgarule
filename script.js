var userAnswers = new Array(5);
for(var i=0;i<5;i++) {
	userAnswers[i] = sessionStorage.getItem(i);
}
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
	  document.getElementById("questions").appendChild(questionElement);
	}
  }
  renderQuestions();

var btn = document.getElementById("save");
btn.addEventListener("click", ()=> {
	var q1 = document.querySelector("input[name='question-0']:checked");
	console.log(q1.value);
	if(q1 != null) {
		console.log(q1.value);
		sessionStorage.setItem("0",q1.value);
	}
	var q2 = document.querySelector("input[name='question-1']:checked");
	if(q2 != null) {
		sessionStorage.setItem("1",q2.value);
	}
	var q3 = document.querySelector("input[name='question-2']:checked");
	if(q3 != null) {
		sessionStorage.setItem("2",q3.value);
	}
	var q4 = document.querySelector("input[name='question-3']:checked");
	if(q4 != null) {
		sessionStorage.setItem("3",q4.value);
	}
	var q5 = document.querySelector("input[name='question-4']:checked");
	if(q5 != null) {
		sessionStorage.setItem("4",q5.value);
	}
});