// Select elements
const countSpan = document.querySelector(".question-count span");
const bulletsContainer = document.querySelector(".bullets .spans");
const quizArea = document.querySelector(".quiz-area");
const answerArea = document.querySelector(".answers-area");
const submitButton = document.querySelector(".submit-answer");
const resultsContainer = document.querySelector(".results");
const countdownElement = document.querySelector(".countdown");

// Settings
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

// Fetching the questions
const getQuestions = () => {
  let myRequest = fetch("HTML_Questions.json")
    .then((response) => response.json())
    .then((questions) => {
      let qCount = questions.length;
      questionCounter(qCount);
      bulletMaker(questions);
      getQuestionsData(questions[currentIndex], qCount);

      countdown(10, qCount);

      submitButton.onclick = () => {
        let rightAnswer = questions[currentIndex].right_answer;
        currentIndex++;

        checkAnswer(rightAnswer, qCount);

        quizArea.innerHTML = "";
        answerArea.innerHTML = "";

        getQuestionsData(questions[currentIndex], qCount);

        handleBullets();

        clearInterval(countdownInterval);
        countdown(10, qCount);

        showResults(qCount);
      };
    })
    .catch((err) => console.log("file not found"));
};
getQuestions();

// Getting the question count
const questionCounter = (num) => {
  countSpan.innerHTML = num;
};

// Making the bullets
const bulletMaker = (questions) => {
  questions.forEach((question, index) => {
    let span = document.createElement("span");
    bulletsContainer.appendChild(span);
    if (index === 0) {
      span.classList.add("on");
    }
  });
};

// Showing the question data in DOM
const getQuestionsData = (obj, count) => {
  if (currentIndex < count) {
    let title = document.createElement("h2");
    let titleText = document.createTextNode(obj.title);
    title.appendChild(titleText);
    quizArea.appendChild(title);

    for (let i = 1; i <= 4; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.className = "answer";
      answerArea.appendChild(mainDiv);

      let radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "question";
      radioInput.id = `answer_${i}`;
      radioInput.dataset.answer = obj[`answer_${i}`];

      let label = document.createElement("label");
      label.htmlFor = `answer_${i}`;
      let labelText = document.createTextNode(obj[`answer_${i}`]);
      label.appendChild(labelText);
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(label);
    }
  }
};

// Checking the answers on-submit
function checkAnswer(rAnswer, qcount) {
  let answers = document.getElementsByName("question");
  let chosenAnswer;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked && answers[i].dataset.answer === rAnswer) {
      chosenAnswer = answers[i].dataset.answer;
      rightAnswers++;
    } else if (answers[i].checked && answers[i].dataset.answer !== rAnswer) {
      chosenAnswer = answers[i].dataset.answer;
    }
  }
}

// Handling bullets
const handleBullets = () => {
  const bullets = document.querySelectorAll(".bullets .spans span");
  const bulletsArray = Array.from(bullets);

  bulletsArray.forEach((bullet, index) => {
    if (index === currentIndex) {
      bullet.classList.add("on");
    }
  });
};

// Showing results
const showResults = (count) => {
  let results;
  if (currentIndex === count) {
    quizArea.remove();
    answerArea.remove();
    submitButton.remove();
    bulletsContainer.remove();
    if (rightAnswers < count / 2) {
      results = `<span class="bad">Unfortunately! </span> you have a bad degree ${rightAnswers} / ${count}, Work on yourself`;
    } else if (rightAnswers === count) {
      results = `<span class="perfect">Perfect! </span> Congratulations you have a the highest degree ${rightAnswers} / ${count}`;
    } else {
      results = `<span class="good">Good! </span> you have a moderate degree ${rightAnswers} / ${count}, Work on yourself`;
    }
    resultsContainer.style.cssText =
      "margin: 20px auto; min-width: 600px; background: #ddd; align-items: center; justify-content: center; font-size: 21px; padding: 20px; border - radius: 5px; ";
    resultsContainer.innerHTML = results;
  }
};

// Countdown function
const countdown = (duration, count) => {
  if (currentIndex < count) {
    let minutes, seconds;
    countdownInterval = setInterval(() => {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      countdownElement.innerHTML = `${minutes}:${seconds}`;

      if (--duration < 0) {
        clearInterval(countdownInterval);
        submitButton.click();
      }
    }, 1000);
  }
};
