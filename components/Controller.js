let currentGameState;
let currentQuestionIndex;
let dimensionScores = [0, 0, 0, 0];
let tempHueRanges = [
  [0, 179],
  [180, 359],
];
let tempHueMid = [0, 0];
let finalSaturation = 0;
let finalBrightness = 50;
let finalHueRanges = [0, 0];

let score = {
  active: 0,
  passive: 0,
  independent: 0,
  collaborative: 0,
  emotional: 0,
  logical: 0,
  specialized: 0,
  melded: 0,
}

function calculateDimensionScores({ questionIndex, answerScores }) {
  console.log(questionIndex, answerScores);
  score = { ...score, ...answerScores };
  console.log(score);

  // Question 0: Active or Passive
  // Question 1: Independent or Collaborative
  // Question 2: Emotional or Logical
  // Question 3: Specialized or Melded
  

  // if (index === 0) {
  //   tempHueMid = [180 - score * hueGap, 180 + score * hueGap];
  // } else if (index === 1) {
  //   console.log(`scoreMap[1]:${scoreMap[1]}`);
  //   console.log(`scoreMap[1][score]:${scoreMap[1][score]}`);
  //   finalSaturation = scoreMap[1][score];
  // } else if (index === 2) {
  //   finalBrightness = scoreMap[2][score];
  // } else if (index === 3) {
  //   switch (score) {
  //     case -2:
  //       finalHueRanges = [tempHueMid[1], tempHueMid[1] + hueGap / 2];
  //       break;
  //     case -1:
  //       finalHueRanges = [tempHueMid[1] - hueGap / 2, tempHueMid[1]];
  //       break;
  //     case 0:
  //       const rangeIndex = Math.floor(Math.random() * tempHueMid.length);
  //       finalHueRanges = [
  //         tempHueMid[rangeIndex] - hueGap / 4,
  //         tempHueMid[rangeIndex] + hueGap / 4,
  //       ];
  //       break;
  //     case 1:
  //       finalHueRanges = [tempHueMid[0], tempHueMid[0] + hueGap / 2];
  //       break;
  //     case 2:
  //       finalHueRanges = [tempHueMid[0] - hueGap / 2, tempHueMid[0]];
  //       break;
  //   }
  // }

  // if (index === 3) {
  //   const finalHue = Math.floor(
  //     Math.random() * (hueGap / 2) + finalHueRanges[0]
  //   );
  //   const tempSaturation =
  //     Math.floor(Math.random() * saturationGap) + finalSaturation;
  //   const tempBrightness =
  //     Math.floor(Math.random() * brightnessGap) + finalBrightness;
  //   document.documentElement.style.setProperty(
  //     "--color-you",
  //     `hsl(${finalHue}, ${finalSaturation}%, ${finalBrightness}%)`
  //   );
  //   console.log(
  //     `finalHueRanges:${finalHueRanges}, finalSaturation:${finalSaturation}, finalBrightness:${finalBrightness}`
  //   );
  // } else {
  //   const randomIndex = Math.floor(Math.random() * tempHueMid.length);
  //   const tempHue =
  //     Math.floor(Math.random() * hueGap) +
  //     (tempHueMid[randomIndex] - hueGap / 2);
  //   const tempSaturation =
  //     Math.floor(Math.random() * saturationGap) + finalSaturation;
  //   const tempBrightness =
  //     Math.floor(Math.random() * brightnessGap) + finalBrightness;
  //   document.documentElement.style.setProperty(
  //     "--color-you",
  //     `hsl(${tempHue}, ${finalSaturation}%, ${finalBrightness}%)`
  //   );
  //   console.log(
  //     `tempHueMid:${tempHueMid}, finalSaturation:${finalSaturation}, finalBrightness:${finalBrightness}`
  //   );
  // }
}

async function changeGameState(goToNextStep = true) {
  // First step
  if (currentGameState === undefined || currentQuestionIndex === undefined) {
    currentGameState = GAME_STATES[1]; // Temp
    currentQuestionIndex = 0;
  }
  // Forward
  else if (goToNextStep) {
    // Splash
    if (currentGameState === GAME_STATES[0]) {
      currentGameState = GAME_STATES[1];
    }
    // Game
    else if (currentGameState === GAME_STATES[1]) {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        currentQuestionIndex++;
      } else {
        currentGameState = GAME_STATES[2];
      }
    }
    // Result
    else if (currentGameState === GAME_STATES[2]) {
      currentGameState = GAME_STATES[0];
    }
  }
  // Backward
  else {
    // Splash
    if (currentGameState === GAME_STATES[0]) {
      currentGameState = GAME_STATES[2];
    }
    // Game
    else if (currentGameState === GAME_STATES[1]) {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
      } else {
        currentGameState = GAME_STATES[0];
      }
    }
    // Result
    else if (currentGameState === GAME_STATES[2]) {
      currentGameState = GAME_STATES[1];
    }
  }

  // Update UI
  await updateUI();
}

async function updateUI() {
  // Update graphics
  if (currentGameState === GAME_STATES[0]) {
    // TODO: Splash
  } else if (currentGameState === GAME_STATES[1]) {
    // Update questions
    const {
      question,
      answers,
      answerScores,
      situation_1,
      situation_2,
      situation_background,
    } = QUESTIONS[currentQuestionIndex];

    // Hide container, situations and background
    questionsContainer.style.opacity = 0;
    svgSituation1.style.opacity = 0;
    svgSituation2.style.opacity = 0;
    svgSituationBackground.style.opacity = 0;

    await new Promise((r) => setTimeout(r, 2000));

    // Clear container
    questionsContainer.innerHTML = "";

    // Add question title
    questionsContainer.appendChild(
      questionTitleTemplate.content.cloneNode(true)
    );
    questionsContainer.querySelector("[data-name='question_title']").innerHTML =
      question;

    // Add question options
    for (const [index, answer] of answers.entries()) {
      questionsContainer.appendChild(
        questionOptionTemplate.content.cloneNode(true)
      );
      const newQuestionOption = questionsContainer.querySelectorAll(
        "[data-name='question_option']"
      )[index];
      newQuestionOption.querySelector("p").innerHTML = answer;
      newQuestionOption.addEventListener("click", () => {
        calculateDimensionScores({
          questionIndex: currentQuestionIndex,
          answerScores: answerScores[index]
        });
        changeGameState();
      });
    }

    // Set situations and background
    setImage("situation_1_container", situation_1);
    setImage("situation_2_container", situation_2);
    setImage("situation_background_container", situation_background);

    // Show container, situations and background
    questionsContainer.style.opacity = 1;
    svgSituation1.style.opacity = 1;
    svgSituation2.style.opacity = 1;
    svgSituationBackground.style.opacity = 1;
  } else if (currentGameState === GAME_STATES[2]) {
    // TODO: Result
  }
}

async function initialize() {
  // Set game state
  await changeGameState();
}

(async () => {
  initialize();
})();
