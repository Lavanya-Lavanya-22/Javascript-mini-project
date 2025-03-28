const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Rome", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest mammal on Earth?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Shark", correct: false },
      ],
    },
    {
      question: "What is the smallest country in the world by land area?",
      answers: [
        { text: "Monaco", correct: false },
        { text: "San Marino", correct: false },
        { text: "Vatican City", correct: true },
        { text: "Liechtenstein", correct: false },
      ],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Iron", correct: false },
        { text: "Gold", correct: false },
        { text: "Diamond", correct: true },
        { text: "Platinum", correct: false },
      ],
    },
  ];
  
  const question_element = document.getElementById("question");
  const answer_btn = document.getElementById("button-answer");
  const next_btn = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next_btn.innerHTML = "Next";
    next_btn.style.display = "none"; // Hide next button initially
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question_element.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn-answer");
      answer_btn.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    next_btn.style.display = "none";
    while (answer_btn.firstChild) {
      answer_btn.removeChild(answer_btn.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    // Disable all buttons after selection
    Array.from(answer_btn.children).forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    next_btn.style.display = "block"; // Show the next button
  }
  
  function showScore() {
    resetState();
    question_element.innerHTML = `YOU SCORED ${score} OUT OF ${questions.length}`;
    next_btn.innerHTML = "Play Again";
    next_btn.style.display = "block"; // Show the next button after showing score
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  next_btn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz(); // Restart the quiz after the final score is shown
    }
  });
  
  // Start the quiz initially
  startQuiz();
  