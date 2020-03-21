'use strict';

const store = {
  questions: [
    {
      question: 'Who is the cutest in all the Galaxy?',
      answers: ['Babu Frik', 'Baby Yoda', 'R2-D2', 'Salacius B. Crumb'],
      correctAnswer: 'Baby Yoda',
      correctImage:
        "<img class= 'img1' src='https://thenypost.files.wordpress.com/2020/01/baby_yoda.jpg?quality=90&strip=all&w=618&h=410&crop=1' alt= 'Baby Yoda being adorable.'>"
    },
    {
      question: 'What was the order issued to kill the Jedi?',
      answers: ['66', '347', '42', '47'],
      correctAnswer: '66',
      correctImage:
        "<img class= 'img2' src='https://vignette.wikia.nocookie.net/starwars/images/4/44/End_Days.jpg/revision/latest/scale-to-width-down/500?cb=20111028234105' alt= 'Clone tropper receiving Order 66.'>"
    },
    {
      question: "What color was Mace Windu's lightsaber?",
      answers: ['Blue', 'Green', 'Red', 'Purple'],
      correctAnswer: 'Purple',
      correctImage:
        "<img class= 'img3' src='https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768' alt= 'Mace Windu holding a purple lightsaber.'>"
    },
    {
      question: 'Which hand did Luke Skywalker get cut off?',
      answers: [
        'Left',
        'I thought it was a foot!',
        'Right',
        "He didn't have a hand cut off"
      ],
      correctAnswer: 'Right',
      correctImage:
        "<img class= 'img4' src='https://newmediarockstars.com/wp-content/uploads/2016/01/star-wars-arm-2.jpg' alt= 'Luke Skywalker getting his right hand cut off.'>"
    },
    {
      question: "What was Finn's stormtropper code name?",
      answers: ['JK-1983', 'FN-2187', 'GN-6783', 'FK-3902'],
      correctAnswer: 'FN-2187,',
      correctImage:
        "<img class= 'img5' src='https://lumiere-a.akamaihd.net/v1/images/finn-bio-1_92f4d3db.jpeg?region=0%2C39%2C1280%2C722&width=768' alt= 'Finn in his stormtrooper armor.'>"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// START PAGE

function generateStartPage() {
  if (store.quizStarted === false) {
    let start = `<div class = 'start-container'>
      <p id="start">Click Start to Test Your Skills</p>
    <button class="start-button" type="button" value="submit">
      START
    </button>
    </div>`;
    $('.Start').html(start);
  } else {
    console.log('not working');
  }
}
// //QUESTION PAGE & ANSWER PAGE

function generateQuestion() {
  let question = `<p class = 'question'> Question: ${store.questionNumber +
    1} / 5 </p><p>${store.questions[store.questionNumber].question}</p>`;
  for (
    let i = 0;
    i < store.questions[store.questionNumber].answers.length;
    i++
  ) {
    let newAnswers = store.questions[store.questionNumber].answers[i];
    question += `<label><input class = 'js-checkAnswer' type="radio" name = 'radAnswer' checked= 'checked' value = '${newAnswers}'><span id = 'focus'>${newAnswers}</span></label>`;
  }
  question += `
  <div class = 'a-button-submit'><button id = 'submit-button' class="next-button" type="button" value="submit" hidden = 'true' >SUBMIT</button> </div>
  <div id = "answer" hidden></div>`;
  $('.Start').html('');
  $('.Start').html(question);
}

function generateCorrectAnswer() {
  const correct = `<p class= 'answer-display'> Correct! </p><div class = 'correctImg'>${
    store.questions[store.questionNumber].correctImage
  }</div><p class= 'score-display'>SCORE:${store.score}/5</p>
  <div class = 'a-button-next-question'><button id = 'next-question-button' class="next-question-button" type="button" value="submit">NEXT</button></div>`;
  console.log('the score works', store.score);
  $('.Start').html(correct);
}

function generateWrongAnswer() {
  const wrong = `<p class= 'answer-display'> Wrong!</p><div class="wrongImg"><img class="img6" src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fboss-nass-laughing-58c705b9ad3bb.jpeg" alt="Laughing Boss Nass."></div><p class= 'correct-answer'>Correct Answer: ${
    store.questions[store.questionNumber].correctAnswer
  } <p class= 'score-display'>SCORE:${store.score}/5</p> 
  <div class = 'a-button-next-question'><button id = 'next-question-button' class="next-question-button" type="button" value="submit">NEXT</button></div>`;
  $('.Start').html(wrong);
  console.log('the score works');
  return store.score;
}

// END PAGE

function generateEndPage() {
  let end = `<p>The End</p><p>SCORE:${store.score}/5</p><div class = 'restart-page-Img'<img class="img7" src="https://i2.wp.com/quantitativepeace.com/wp-content/uploads/2019/12/kt2uymlokn8umlspzkih.jpg?resize=768%2C384" alt="Luke Skywalker and Han Solo receiving metals"></div><div class = 'a-button-restart'><button id = \'restart-button\' class="restart-button" type="button" value="submit">Restart</button></div>`;
  $('.Start').html(end);
}

// EVENT HANDLERS

function handleStartButton() {
  $('.Start').on('click', '.start-button', function() {
    store.quizStarted = true;
    // console.log('workin', store.quizStarted, store.questionNumber);
    console.log('working');
    generateQuestion();
  });
}

function handleNextButton() {
  $('.Start').on('click', '.next-question-button', function() {
    store.questionNumber++;
    if (store.questionNumber === 5) {
      generateEndPage();
    } else {
      generateQuestion();
    }
    console.log('working', store.questionNumber);
  });
}

function checkedAnswer() {
  $('.Start').change('js-checkAnswer', function() {
    if ($('.js-checkAnswer').is(':checked')) {
      $('.next-button').removeAttr('hidden');
      console.log('working checked');
    }
  });
  $('.Start').on('click', '.next-button', function(event) {
    event.preventDefault();
    const value = $('.js-checkAnswer:checked').val();
    console.log(value);
    if (value === store.questions[store.questionNumber].correctAnswer) {
      store.score++;
      generateCorrectAnswer();
    } else {
      generateWrongAnswer();
    }
    // console.log('working', value);
  });
}

function restartGame() {
  $('.Start').on('click', '.restart-button', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    generateStartPage();
    console.log('working');
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
