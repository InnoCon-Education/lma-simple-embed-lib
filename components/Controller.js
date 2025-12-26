let currentGameState;
let currentQuestionIndex;

const hueCenter = 0;
const saturationCenter = 75;
const brightnessCenter = 50;
const transparencyCenter = 62.5;

const hueRange = [0, 359];
const saturationRange = [50, 100];
const brightnessRange = [25, 75];
const transparencyRange = [25, 100];

const hueStep = 360 / 12;
const saturationStep = (saturationRange[1] - saturationRange[0]) / 4;
const brightnessStep = (brightnessRange[1] - brightnessRange[0]) / 4;
const transparencyStep = (transparencyRange[1] - transparencyRange[0]) / 2;

const hueOffset = 360 / 24;
const saturationOffset = (saturationRange[1] - saturationRange[0]) / 8;
const brightnessOffset = (brightnessRange[1] - brightnessRange[0]) / 8;
const transparencyOffset = (transparencyRange[1] - transparencyRange[0]) / 4;

let finalHueCenter = 0;
let finalSaturationCenter = 0;
let finalBrightnessCenter = 0;
let finalTransparencyCenter = 0;

let finalHueRange = [0, 0];
let finalSaturationRange = [0, 0];
let finalBrightnessRange = [0, 0];
let finalTransparencyRange = [0, 0];

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

function calculateDimensionScores({ answerScores }) {
  console.log(answerScores);
  score = { ...score, ...answerScores };
  console.log(score);

  // Hue available range: 0 - 359
  // Saturation available range: 50 - 100
  // Brightness available range: 25 - 75
  // Transparency available range: 25 - 100

  // Question 0: Active or Passive
  // Question 1: Independent or Collaborative
  // Question 2: Emotional or Logical
  // Question 3: Specialized or Melded

  // Question 0: Decide Hue starts from Active:Red or Passive:Cyan
  // Question 1: Starts from center of range, decide Saturation goes to Collaborative:Low or Independent:High
  // Question 2: Starts from center of range, decide Brightness goes to Emotional:Low or Logical:High
  // Question 3: Starts from Red or Cyan, decide Hue goes to Melded:Yellow-Green or Specialized:Purple;
  // If Active > Melded, Hue more towards Red; If Active < Melded, Hue more towards Yellow-Green
  // If Active = Melded, Hue stays at center of Red and Yellow-Green
  // If Active > Specialized, Hue more towards Red; If Active < Specialized, Hue more towards Purple
  // If Active = Specialized, Hue stays at center of Red and Purple
  // If Passive > Melded, Hue more towards Cyan; If Passive < Melded, Hue more towards Yellow-Green
  // If Passive = Melded, Hue stays at center of Cyan and Yellow-Green
  // If Passive > Specialized, Hue more towards Cyan; If Passive < Specialized, Hue more towards Purple
  // If Passive = Specialized, Hue stays at center of Cyan and Purple
  // Starts from center of range, decide Transparency goes to Active+Passive+Melded+Specialized<=2:Low or >2:High

  // Calculate result color properties from user answers

  // Step 1: Hue: Red (0) for Active, Cyan (180) for Passive, mix for in-between
  if (score.active !== 0) {
    finalHueCenter = 0;
  } else if (score.passive !== 0) {
    finalHueCenter = 180;
  }

  // Step 2: Saturation: Collaborative (Low, 50), Independent (High, 100), interpolate
  if (score.collaborative !== 0) {
    finalSaturationCenter = (saturationCenter - saturationStep * score.collaborative) + saturationOffset;
  } else if (score.independent !== 0) {
    finalSaturationCenter = (saturationCenter + saturationStep * score.independent) - saturationOffset;
  }

  // Step 3: Brightness: Emotional (25), Logical (75), interpolate
  if (score.emotional!== 0) {
    finalBrightnessCenter = (brightnessCenter - brightnessStep * score.emotional) + brightnessOffset;
  } else if (score.logical!== 0) {
    finalBrightnessCenter = (brightnessCenter + brightnessStep * score.logical) - brightnessOffset;
  }

  // Step 4: Hue adjustment: Specialized (Purple, 300), Melded (Green, 120), or keep in center. 
  // Let specialized pull toward purple side, melded toward green side, from current hue.
  // Hue adjustment based on Specialized (purple, 300) or Melded (green, 120)
  // Apply only if both specialized/melded and active/passive present

  // Specialized pulls hue towards purple (300) from current hue base
  if (score.specialized!== 0) {
    if (score.active!== 0) {
      finalHueCenter = 360 - (360 / 8);
      // Interpolate from Red (0) towards Purple (300)
      // If active > specialized, closer to red; if specialized > active, closer to purple
      if (score.active > score.specialized) {
        finalHueCenter = finalHueCenter + hueStep;
      } else if (score.active < score.specialized) {
        finalHueCenter = finalHueCenter - hueStep;
      }
    } else if (score.passive!== 0) {
      finalHueCenter = 180 + (360 / 8);
      // Interpolate from Cyan (180) towards Purple (300)
      if (score.passive > score.specialized) {
        finalHueCenter = finalHueCenter - hueStep;
      } else if (score.passive < score.specialized) {
        finalHueCenter = finalHueCenter + hueStep;
      }
    }
  }
  // Melded pulls hue towards green (120) from current hue base
  else if (score.melded!== 0) {
    if (score.active!== 0) {
      finalHueCenter = 0 + (360 / 8);
      // Interpolate from Red (0) towards Green (120)
      if (score.active > score.melded) {
        finalHueCenter = finalHueCenter - hueStep;
      } else if (score.active < score.melded) {
        finalHueCenter = finalHueCenter + hueStep;
      }
    } else if (score.passive!== 0) {
      finalHueCenter = 180 - (360 / 8);
      // Interpolate from Cyan (180) towards Green (120)
      if (score.passive > score.melded) {
        finalHueCenter = finalHueCenter + hueStep;
      } else if (score.passive < score.melded) {
        finalHueCenter = finalHueCenter - hueStep;
      }
    }
  }

  // Step 5: Transparency calculation based on trait aggregates
  // Transparency: 25 (low) to 100 (high)
  // As example, let's base transparency on sum of active, passive, melded, specialized, capped to 0-100
  let sumAPMS = 0;
  sumAPMS = score.active + score.passive + score.melded + score.specialized;
  // E.g. if sum <= 2: 25 (low), else proportional, max 100
  if (sumAPMS <= 2) {
    finalTransparencyCenter = transparencyCenter - transparencyStep + transparencyOffset;
  } else if (sumAPMS > 2) {
    finalTransparencyCenter = transparencyCenter + transparencyStep - transparencyOffset;
  }

  // Useful debug log for downstream rendering:
  console.debug('Final Color:', {
    finalHueCenter,
    finalSaturationCenter,
    finalBrightnessCenter,
    finalTransparencyCenter,
  });
  // Set "you" color in the UI
  // Set global CSS variable --color-you
  document.documentElement.style.setProperty(
    '--color-you',
    `hsla(${finalHueCenter}, ${finalSaturationCenter}%, ${finalBrightnessCenter}%, ${finalTransparencyCenter}%)`
  );
}

async function changeGameState(goToNextStep = true) {
  // First step
  if (currentGameState === undefined || currentQuestionIndex === undefined) {
    currentGameState = GAME_STATES[0];
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

function hideUI(container) {
  setOpacity(container, 0);
  setPointerEvents(container, "none");
}

function showUI(container) {
  setOpacity(container, 1);
  setPointerEvents(container, "auto");
}

function setupSplashUI() {
  gameTitle.innerHTML = GAME_TITLE;
  gameSubtitle.innerHTML = GAME_SUBTITLE;
  for (const [index, notice] of GAME_NOTICES.entries()) {
    gameNoticeContainer.appendChild(splashNoticeTemplate.content.cloneNode(true));
    const newSplashNotice = gameNoticeContainer.querySelectorAll("[data-name='game_notice']")[index];
    newSplashNotice.innerHTML = notice;
  }

  splashButton.querySelector("[data-name='question_option_text']").innerHTML = SPLASH_BUTTON_TEXT;
  splashButton.addEventListener("click", () => {
    splashButton.disabled = true;
    document.getElementById("effect_container").style.display = "block";
    changeGameState();
  });
}

function setupEffectUI() {
  // Restart CSS animations for effect container and its children
  // This works by forcing a reflow and removing/re-adding the effect component(s)
  const effect = effectContainer.querySelector('effect-meteorshower');
  if (effect) {
    // Clone the node to restart the animation cleanly
    const newEffect = effect.cloneNode(true);
    effect.replaceWith(newEffect);
  } else {
    // If not found, force reflow as fallback
    effectContainer.style.animation = 'none';
    // Trigger reflow
    void effectContainer.offsetWidth;
    effectContainer.style.animation = '';
  }
}

function setupGameUI() {
  // Update questions
  const {
    question,
    answers,
    answerScores,
    situation_1,
    situation_2,
    situation_background,
  } = QUESTIONS[currentQuestionIndex];

  // Clear container
  questionsContainer.innerHTML = "";

  // Add question title
  questionsContainer.appendChild(
    questionTitleTemplate.content.cloneNode(true)
  );
  questionsContainer.querySelector("[data-name='question_title']").innerHTML = question;

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
      // Disable all buttons in questionsContainer
      const buttons = questionsContainer.querySelectorAll("button");
      for (const btn of buttons) {
        btn.disabled = true;
      }
      calculateDimensionScores({
        answerScores: answerScores[index]
      });
      changeGameState();
    });
  }

  // Set situations and background
  setImage("situation_1_container", situation_1);
  setImage("situation_2_container", situation_2);
  setImage("situation_background_container", situation_background);
}

function setupResultUI() {
  // Update result UI
  let resultKey = "";
  if (score.active > score.passive) {
    resultKey += "a";
  } else resultKey += "p";
  if (score.independent > score.collaborative) {
    resultKey += "i";
  } else resultKey += "c";
  if (score.emotional > score.logical) {
    resultKey += "e";
  } else resultKey += "l";
  if (score.specialized > score.melded) {
    resultKey += "s";
  } else resultKey += "m";

  const {
    description,
    title,
    motto,
    subjects,
    jobs,
    friend,
  } = RESULTS[resultKey];

  // Update result UI
  resultTitle.innerHTML = title;
  resultDescription.innerHTML = description;
  resultMotto.innerHTML = motto;
  resultSubjects.innerHTML = subjects;
  resultJobs.innerHTML = jobs;
  resultFriend.innerHTML = friend;

  // Update result color code
  let colorCode = window.getComputedStyle(document.documentElement).getPropertyValue('--color-you');
  resultColorCode.innerHTML = colorCode;
}

async function updateUI() {
  // Update graphics

  // From None to Splash
  if (currentGameState === GAME_STATES[0]) {
    // Hide Game, Effect and Result UI
    hideUI(uiContainer);
    hideUI(effectContainer);
    hideUI(resultContainer);

    // Hide Effect
    hideUI(effectContainer);

    // Setup Splash UI
    setupSplashUI();

    // Show Splash
    showUI(splashContainer);

  // From Splash to Game
  } else if (currentGameState === GAME_STATES[1]) {
    if (currentQuestionIndex === 0) {
      // Hide Splash, Game and Result UI
      hideUI(splashContainer);
      hideUI(uiContainer);
      hideUI(resultContainer);

      // Play effect
      showUI(effectContainer);
      
      // Setup Effect UI
      setupEffectUI();

      // Wait for effect to play
      await new Promise((r) => setTimeout(r, 3000));

      // Hide Effect
      hideUI(effectContainer);

      // Show Game UI
      showUI(uiContainer);
    } 

    // Hide container, situations and background
    hideSituationsAndUI();

    // Wait for 3 seconds
    await new Promise((r) => setTimeout(r, 1500));

    // Setup Game UI
    setupGameUI();

    // Show container, situations and background
    showSituationsAndUI();

  // From Game to Result
  } else if (currentGameState === GAME_STATES[2]) {
    // Hide Game, Effect and Splash UI
    hideUI(uiContainer);

    // Play effect
    showUI(effectContainer);
      
    // Setup Effect UI
    setupEffectUI();

    // Wait for effect to play
    await new Promise((r) => setTimeout(r, 3000));

    // Hide Effect
    hideUI(effectContainer);

    // Setup Result UI
    setupResultUI();

    // Show Result UI
    showUI(resultContainer);
  }
}

function hideSituationsAndUI() {
  // Hide container, situations and background
  setOpacity(questionsContainer, 0);
  setOpacity(situation1Container, 0);
  setOpacity(situation2Container, 0);
  setOpacity(situationBackgroundContainer, 0);
}

function showSituationsAndUI() {
  // Show container, situations and background
  setOpacity(questionsContainer, 1);
  setOpacity(situation1Container, 1);
  setOpacity(situation2Container, 1);
  setOpacity(situationBackgroundContainer, 1);
}

async function initialize() {
  // Set game state
  await changeGameState();
}

(async () => {
  initialize();
})();
