// /**
//  * Example store structure
//  */
'use strict';

const store = {
  // 5 or more questions are required
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
        "SHe didn't have a hand cut off"
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

// $('button').on('click', function(event) {
//   event.preventDefault();
//   console.log('Working');
// });

// $("#my-home-nav").click(function(){
//   $("#my-home-div").show(); // or .fadeIn(), etc.
//   $("#my-about-div").hide();
//   $("#my-contact-div").hide();
// });

// START PAGE Change HTML class
$('.start-button').on('click', function handleStartButton() {
  store.quizStarted = true;
  console.log('workin', store.quizStarted, store.questionNumber);
  window.location.href = 'Questions.html';
});

// function getElementById(item) {
//   return $(question)
//     .closest('li')
//     .data('item-id');
// }
// }

// //QUESTION PAGE

function displayQuestion() {
  let question = `<p>Question:</p><p>${
    store.questions[store.questionNumber].question
  }</p><li> ${
    store.questions[store.questionNumber].answers
  } </li><ul id="buttons"></ul>
      <button id = 'next' class="next-button" type="button" value="submit" disabled = "true" hidden>NEXT</button>
      <button id = 'submit-button' class="next-button" type="button" value="submit" disabled = "true">SUBMIT</button>
      <div id = "answer" hidden></div>
      <img
        id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
        alt="Star Wars Logo"
      />`;
  $('.Start-App').html('');
  $('.Start-App').html(question);
  // let question = '<p>Question</p>' + '<ul id="buttons">';
  // for (
  //   let i = 0;
  //   i < store.questions[store.questionNumber].answers.length;
  //   i++
  // ) {
  //   question += ` <li> ${
  //     store.questions[store.questionNumber].answers[i]
  //   } </li>`;
  // }
  // question += `</ul>
  // <button id = 'next' class="next-button" type="button" value="submit" disabled = "true" hidden>NEXT</button>
  // <button id = 'submit-button' class="next-button" type="button" value="submit" disabled = "true">SUBMIT</button>
  // <div id = "answer" hidden></div>
  // <img
  //   id="logo"
  //   src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
  //   alt="Star Wars Logo"
  // />`;

  // $('.Start-App').html('');
  // $('.Start-App').html(question);
}

// function toggleCheckedAnswer() {

// }

// function handleNextButton(page) {

// }

// function handleAnswer() {

// }

// function checkIfCorrect() {

// }

// //CORRECT
//function scoreCount() {
//   if (theAnswer === store.correctAnswer) {
//     return store.score++;
//   } else {
//     return store.score;
//   }
// }
//function handleScore() {

//}

// function

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
