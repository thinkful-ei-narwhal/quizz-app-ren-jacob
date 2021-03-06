'use strict';

const store = {
  questions: [
    {
      question: 'Who is the cutest in all the Galaxy?',
      answers: ['Babu Frik', 'Baby Yoda', 'R2-D2', 'Salacius B. Crumb'],
      correctAnswer: 'Baby Yoda',
      correctUrl:
        'https://thenypost.files.wordpress.com/2020/01/baby_yoda.jpg?quality=90&strip=all&w=618&h=410&crop=1',
      correctAlt: 'Baby Yoda being adorable.',
    },
    {
      question: 'What was the order issued to kill the Jedi?',
      answers: ['66', '347', '42', '47'],
      correctAnswer: '66',
      correctUrl:
        'https://vignette.wikia.nocookie.net/starwars/images/4/44/End_Days.jpg/revision/latest/scale-to-width-down/500?cb=20111028234105',
      correctAlt: 'Clone tropper receiving Order 66.',
    },
    {
      question: "What color was Mace Windu's lightsaber?",
      answers: ['Blue', 'Green', 'Red', 'Purple'],
      correctAnswer: 'Purple',
      correctUrl:
        'https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768',
      correctAlt: 'Mace Windu holding a purple lightsaber.',
    },
    {
      question: 'Which hand did Luke Skywalker get cut off?',
      answers: [
        'Left',
        'I thought it was a foot!',
        'Right',
        "He didn't have a hand cut off",
      ],
      correctAnswer: 'Right',
      correctUrl:
        'https://newmediarockstars.com/wp-content/uploads/2016/01/star-wars-arm-2.jpg',
      correctAlt: 'Luke Skywalker getting his right hand cut off.',
    },
    {
      question: "What was Finn's stormtropper code name?",
      answers: ['JK-1983', 'FN-2187', 'GN-6783', 'FK-3902'],
      correctAnswer: 'FN-2187',
      correctUrl:
        'https://lumiere-a.akamaihd.net/v1/images/finn-bio-1_92f4d3db.jpeg?region=0%2C39%2C1280%2C722&width=768',
      correctAlt: 'Finn in his stormtrooper armor.',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

// START PAGE

function generateStartPage() {
  if (store.quizStarted === false) {
    const start = `<div class = 'start-container'>
      <p id="start">Click Start to Test Your Skills</p>
    <button class="start-button" type="button" value="submit"  tabindex = '0'>
      START
    </button>
    </div>`;
    $('.Start').html(start);
  } else {
  }
}
// //QUESTION PAGE & ANSWER PAGE

function generateQuestion() {
  let question = `<p class = 'question' >
   Question: ${store.questionNumber + 1} / 5 </p>
   <p>${store.questions[store.questionNumber].question}</p><p>SCORE:${
    store.score
  }/5</p>
   <form class = 'check-submited-answer'>`;
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    let newAnswers = store.questions[store.questionNumber].answers[i];
    question += `  <label>
        <input class = 'js-checkAnswer' type="radio" name = 'radAnswer' value = '${newAnswers}'>
        <span id = 'focus'  tabindex = '0'>${newAnswers}</span>
        </label>
            `;
  }
  question += `
  
  <div class = 'a-button-submit'>
  <button id = 'submit-button'  tabindex = '0' class="next-button" type="button" value="submit" hidden = 'true'> SUBMIT </button>
  </div>
  <div id = "answer" hidden> </div>
  </form>`;
  $('.Start').html('');
  $('.Start').html(question);
}

function generateCorrectAnswer() {
  const correct = `<p class= 'answer-display'> Correct! </p>
    <div class = 'correctImg'><img class= 'rightImg' src='${
      store.questions[store.questionNumber].correctUrl
    }' alt='${store.questions[store.questionNumber].correctAlt}'></div>
    <p class= 'score-display'>SCORE:${store.score}/5</p>
    <div class = 'a-button-next-question'>
    <button id = 'next-question-button' tabindex = '0' class="next-question-button" type="button" value="submit"> NEXT </button>
    </div>`;
  $('.Start').html(correct);
}

function generateWrongAnswer() {
  const wrong = `<p class= 'answer-display' > Wrong!</p>
   <div class="wrongImg"><img class="Img" src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fboss-nass-laughing-58c705b9ad3bb.jpeg" alt="Laughing Boss Nass.">
   </div><p class= 'correct-answer'> Correct Answer: ${
     store.questions[store.questionNumber].correctAnswer
   } <p class= 'score-display'>SCORE:${store.score}/5</p> 
   <div class = 'a-button-next-question'><button tabindex = '0' id = 'next-question-button' class="next-question-button" type="button" value="submit">NEXT</button>
   </div>`;
  $('.Start').html(wrong);
  return store.score;
}

// END PAGE

function generateEndPage() {
  const end = `<p>The End</p><p>SCORE:${store.score}/5</p>
  <div class = 'restart-page-Img'><img class="Img" src="https://i2.wp.com/quantitativepeace.com/wp-content/uploads/2019/12/kt2uymlokn8umlspzkih.jpg?resize=768%2C384" alt="Luke Skywalker and Han Solo receiving metals">
  </div>
  <div class = 'a-button-restart'><button id = 'restart-button\' class="restart-button" type="button" value="submit">Restart</button>
  </div>`;
  $('.Start').html(end);
}

// EVENT HANDLERS

function handleStartButton() {
  $('.Start').on('click', '.start-button', function () {
    store.quizStarted = true;
    generateQuestion();
  });
}

function handleNextButton() {
  $('.Start').on('click', '.next-question-button', function () {
    store.questionNumber++;
    if (store.questionNumber === 5) {
      generateEndPage();
    } else {
      generateQuestion();
    }
  });
}

function checkedAnswer() {
  $('.Start').change('js-checkAnswer', function () {
    if ($('.js-checkAnswer').is(':checked')) {
      $('.next-button').removeAttr('hidden');
    }
  });
  $('.Start').on('click', '.next-button', function (event) {
    event.preventDefault();
    const value = $('.js-checkAnswer:checked').val();
    if (value === store.questions[store.questionNumber].correctAnswer) {
      store.score++;
      generateCorrectAnswer();
    } else {
      generateWrongAnswer();
    }
  });
}

function restartGame() {
  $('.Start').on('click', '.restart-button', function () {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    generateStartPage();
  });
}

//  RENDERING

function renderQuizApp() {
  generateStartPage();
  handleStartButton();
  checkedAnswer();
  handleNextButton();
  restartGame();
}
$(renderQuizApp);
