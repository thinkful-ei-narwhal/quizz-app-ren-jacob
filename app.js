'use strict';

const store = {
  questions: [
    {
      question: 'Who is the cutest in all the Galaxy?',
      answers: ['Babu Frik', 'Baby Yoda', 'R2-D2', 'Salacius B. Crumb'],
      correctAnswer: 'Baby Yoda'
    },
    {
      question: 'What was the order issued to kill the Jedi?',
      answers: ['66', '347', '42', '47'],
      correctAnswer: '66'
    },
    {
      question: "What color was Mace Windu's lightsaber?",
      answers: ['Blue', 'Green', 'Red', 'Purple'],
      correctAnswer: 'Purple'
    },
    {
      question: 'Which hand did Luke have cut off?',
      answers: [
        'Left',
        'I thought it was a foot!',
        'Right',
        "He didn't have a hand cut off"
      ],
      correctAnswer: 'Right'
    },
    {
      question: "What was Finn's stormtropper code name?",
      answers: ['JK-1983', 'FN-2187', 'GN-6783', 'FK-3902'],
      correctAnswer: 'FN-2187'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// START PAGE
function startPage() {
  if (store.quizStarted === false) {
    let start = `<section class="Start">
    <form class="js-answers">
      
      <div class="Start-App">

      <p id="start">Click Start to Test Your Skills</p>
    </form>
    <button class="start-button" type="button" value="submit">
      START
    </button>
    <img
      id="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
      alt="Star Wars Logo"
    /></div>
  </section>`;
    $('.Start').html(start);
  }
}
function handleStartButton() {
  $('.start-button').on('click', function() {
    store.quizStarted = true;
    // console.log('workin', store.quizStarted, store.questionNumber);
    // window.location.href = 'Questions.html';
    displayQuestion();
  });
}
// //QUESTION PAGE

function displayQuestion() {
  let question = `<p>Question: ${store.questionNumber + 1} / 5 </p><p>${
    store.questions[store.questionNumber].question
  }</p>`;
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    let newAnswers = store.questions[store.questionNumber].answers[i];
    question += `<label><input class = 'js-checkAnswer' type="radio" name = 'radAnswer' value = '${newAnswers}'>${newAnswers}</label>`;
  }
  question += `
  <button id = 'submit-button' class="next-button" type="button" value="submit">SUBMIT</button>
  <div id = "answer" hidden></div>
  <img
    id="logo"
    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
    alt="Star Wars Logo"
  />`;
  $('.Start-App').html(question);
}

function checkedAnswer() {
  $('.Start-App').on('click', '.next-button', function(event) {
    event.preventDefault();
    const value = $('.js-checkAnswer:checked').val();
    //below works however .val is grabbing only the first word of the string
    if (value === store.questions[store.questionNumber].correctAnswer) {
      store.score++;
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
    // console.log('working', value);
  });
}

function handleCorrectAnswer() {
  const correct = `<p class= 'answer-display'> Correct! </p><p class= 'score-display'>SCORE:${store.score}/5</p>
  <button id = 'next-question-button' class="next-question-button" type="button" value="submit">NEXT</button>`;
  console.log('the score works', store.score);
  $('.Start-App').html(correct);
}

function handleWrongAnswer() {
  const wrong = `<p class= 'answer-display'> Wrong!</p><p class= 'correct-answer'>Correct Answer: ${
    store.questions[store.questionNumber].correctAnswer
  } <p class= 'score-display'>SCORE:${store.score}/5</p> 
  <button id = 'next-question-button' class="next-question-button" type="button" value="submit">NEXT</button>`;
  $('.Start-App').html(wrong);
  console.log('the score works');
  return store.score;
}

function handleNextButton() {
  $('.Start-App').on('click', '.next-question-button', function() {
    store.questionNumber++;
    if (store.questionNumber === 5) {
      handleEndPage();
    } else {
      displayQuestion();
    }
    console.log('working', store.questionNumber);
  });
}

function handleEndPage() {
  let end =
    '<p>The End</p><button id = \'restart-button\' class="restart-button" type="button" value="submit">Restart</button>';
  $('.Start-App').html(end);
}
function restartGame() {
  $('.Start-App').on('click', '.restart-button', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    startPage();
    console.log('working');
  });
}
//Rendering

function renderQuizApp() {
  handleStartButton();
  checkedAnswer();
  handleNextButton();
  restartGame();
}

$(renderQuizApp);

// $('button').on('click', function(event) {
//   event.preventDefault();
//   console.log('Working');
// });

// $("#my-home-nav").click(function(){
//   $("#my-home-div").show(); // or .fadeIn(), etc.
//   $("#my-about-div").hide();
//   $("#my-contact-div").hide();
// });

// $('button').on('click', 'next-button', function handleStartButton() {
//   event.preventDefault();

//   console.log('workin');
// });
// function handleNextButton(page) {

// }

// /**
//  *
//  * Technical requirements:
//  *
//  * Your app should include a render() function, that regenerates the view each time the store is updated.
//  * See your course material, consult your instructor, and reference the slides for more details.
//  *
//  * NO additional HTML elements should be added to the index.html file.
//  *
//  * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
//  *
//  * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
//  *
//  */

// /********** TEMPLATE GENERATION FUNCTIONS **********/

// // These functions return HTML templates

// /********** RENDER FUNCTION(S) **********/

// // This function conditionally replaces the contents of the <main> tag based on the state of the store

// /********** EVENT HANDLER FUNCTIONS **********/

// // These functions handle events (submit, click, etc)
