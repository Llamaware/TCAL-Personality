let currentQuestion = 0;
const answers = {};
const categorySums = {};

const questions = [
  {
    question: "1. You are standing on the side of a railroad. A runaway train with broken brakes is rushing in your direction, and you see five people tied to the tracks. If you do nothing, the five people will be run over by the train and shall die. Fortunately, there is a lever on your side. If you pull it, you can surely divert the runaway trolley onto the sidetrack. However, one person is tied to the branch line. That person is your significant other (if you do not have one, imagine that you do). If the direction of the train is changed, that person will die.<br><br>Would you pull the lever, killing your loved one? Or would you do nothing and leave the five strangers to die?",
    type: "multiple-choice",
    options: [
    "I absolutely would not pull it.",
    "I would not pull it.",
    "If anything, I think I would not pull it.",
    "I am not sure what I would do. I might freeze and be unable to react.",
    "If anything, I think I would pull it.",
    "I would pull it.",
    "I absolutely would pull it."
    ],
    category: "x",
  },
  {
    question: "2. You and your closest friend have been arrested for a crime you both committed. You are being held in separate cells with no means of communication. The prosecutor offers you a deal.<br><br>Option 1: If both you and your friend choose to remain silent (Ally), you'll each get a one-year sentence for a lesser charge.<br><br>Option 2: If you betray your friend (Betray) while your friend remains silent, you'll go free, but your friend will get a three-year sentence. If your friend betrays you while you remain silent, the situation is reversed.<br><br>If both of you betray each other, you both get a two-year sentence.<br><br>You do not know what your friend will choose. What would you choose to do in this situation?",
    type: "multiple-choice",
    options: [
    "I absolutely would pick Ally.",
    "I would pick Ally.",
    "If anything, I think I would pick Ally.",
    "I might pick either one, depending on who it is.",
    "If anything, I think I would pick Betray.",
    "I would pick Betray.",
    "I absolutely would pick Betray."
    ],
    category: "a",
  },
  {
    question: "3. You learn that you live in a simulation where it is permanently the year 1999. One day, a man in a coat walks up to you and offers you two options.<br><br>Option 1: Exit the simulation to the real world.<br><br>Option 2: Forget that you ever learned this and keep living on in this rather stable environment.<br><br>You do not know what the outside world is like. You also do not know if you will ever learn this information again if you choose to forget it.<br><br>What would you choose to do?",
    type: "multiple-choice",
    options: [
    "I absolutely would leave the simulation.",
    "I would leave the simulation.",
    "If anything, I think I would leave the simulation.",
    "I would choose neither option and just continue living within the simulation, knowing that it is a simulation.",
    "If anything, I think I would choose to forget what I learned.",
    "I would choose to forget what I learned.",
    "I absolutely would choose to forget what I learned."
    ],
    category: "o",
  },
  {
    question: "4. You have to execute one of the following people based on these descriptions. Who do you choose?",
    type: "multiple-choice",
    options: [
    "Person 1: An engineer who donates a few thousand dollars to charity every year. Once robbed a Burger King.",
    "Person 2: A former serial killer, successfully reintegrated into society after spending ten years in a psychiatric institution. Currently works in a post office.",
    "Person 3: A researcher who will develop a vaccine for HIV by next year. Has a woman trapped in his basement against her will.",
    "Person 4: Is a 2 month old baby. Has a 0.01% chance of causing World War 3.",
    "Person 5: Runs a no kill animal shelter. Beats her children.",
    "Person 6: A social worker who makes free food for the homeless. Is depressed and suicidal, with several suicide attempts in the past.",
    "Person 7: A computer programmer and true crime enthusiast. Has plans to murder someone three months from now, just to see what it's like.",
    ],
    category: "x",
  },
  {
    question: "5. The year is 2030. You are a scientist working in a lab, and you have been selected as part of a time-travel experiment to be sent back to the year 1979. You can't come back to the present. You will be provided with $50,000 in cash and an identity. In addition, you can select one of the following things to bring with you. What would you bring?",
    type: "multiple-choice",
    options: [
    "A collection of modern medications and vaccines, with directions for their synthesis using methods available to pharmaceutical companies in 1979.",
    "A library of microfilm reels containing a vast amount of scientific and medical research papers and literature from the 21st century.",
    "A new computer with a collection of video games and software on it, and detailed schematics for its construction.",
    "An electronic tablet containing an offline copy of Wikipedia from 2030.",
    "An extensive library of music from various genres created after 1980, stored on vinyl records and cassette tapes.",
    "A bookshelf full of best-selling novels that were published after 1980, including the entire Harry Potter series.",
    "The deed to an estate with a mansion, located in any country of your choice.",
    ],
    category: "c",
  },
  {
    question: "6. You fall asleep one night and find yourself waking up in an alternate universe, where you are a first-year student attending a magic academy. The technology level here is similar to 2024 Earth.<br><br>Which of the following magic spells would you choose to have?",
    type: "multiple-choice",
    options: [
    "Unleash the Beast - Transform into a wolf, gaining enhanced speed, strength, and senses.",
    "Snake Whisperer - Hypnotize your target into doing your bidding.",
    "Shock the Heart - Compel your target to speak the truth.",
    "It's a Deal - Take any power from another person once they sign a magical contract with you.",
    "Split Card - Create temporary clones of yourself.",
    "Fae of Maleficence - Place a large area within time stasis. Everyone within that area will be put to sleep.",
    "Bet the Limit - Reflect an opponent's attack back to them with double the power.",
    ],
    category: "x",
  },
  {
    question: "7. One day while you are crossing the road, you are hit by a truck, meeting an untimely death. The Goddess of Reincarnation appears before you and tells you that you are allowed to choose what your next life will be like. She will give you the knowledge and skills needed to make it a reality.<br><br>The world you are chosen to reincarnate in is that of a fantasy action webnovel, with early 1800's level technology. In this world, magic is a skill that can be learned. You will keep the memories of your past life.<br><br>What kind of life would you choose to have in this next world?",
    type: "multiple-choice",
    options: [
    "Gain extensive political, social, and economic knowledge and experience relevant to this new world. Become a monarch, ruling over a large country.",
    "Gain knowledge and skills in survival and combat. Become an adventurer or mercenary in a party, traveling across the lands and taking on difficult quests.",
    "Gain complete knowledge of modern medicine from 2024 Earth. Become a renowned surgeon or doctor and save thousands of lives.",
    "Gain knowledge of mechanical and electrical engineering from 2024 Earth. Become an engineer and develop new technologies, starting a technological revolution.",
    "Gain skills of deduction and perception and knowledge of forensic science from 2024 Earth. Become a great detective, solving difficult cases.",
    "Gain knowledge of alchemy and blacksmithing. Become a creator of cutting-edge magical weapons, potions, and elixirs.",
    "Gain advanced knowledge of magic spells and the elements. Become a powerful archmage residing in the Mages' Tower, or the headmage of a magic institute.",
    ],
    category: "e",
  },
  {
    question: "8. The following 11 questions are answered using a scale that ranges from 1 to 7. Select the option on the scale that most closely matches what you would do in the situation.<br><br>After careful deliberation, you make your choice, and the Goddess of Reincarnation sends you off to this next world.<br><br>How well would you be able to cope with living in this new and unfamiliar setting, where technology is limited?",
    type: "multiple-choice",
    options: [
      "1 - I would embrace and accept this new world completely and set forth to make my choice a reality, determined to create a better life than my past one.",
      "2",
      "3",
      "4 - I would miss my old life, but I would also look forward to having new friends and family in this world. I might seek out the people from my previous life, hoping that they have also reincarnated here.",
      "5",
      "6",
      "7 - I would not adjust well at all to life in this new world. I might become depressed, and in the worst case, I would not be able to function at all."
    ],
    category: "es",
  },
  {
    question: "9. In this new world, you are chosen to be part of a quest to retrieve a powerful artifact - a sentient sword that can save your country from an impending disaster. The journey involves navigating through enchanted forests, solving riddles, and clearing dungeons.<br><br>In the enchanted forest, you come across a group of talking creatures having a lively celebration. They invite you to join them. How do you respond?",
    type: "multiple-choice",
    options: [
      "1 - I enthusiastically join the celebration, eager to interact with the creatures, tell stories of my adventures, and make new allies.",
      "2",
      "3",
      "4 - I stay for a while to observe the celebration but may not actively participate unless approached.",
      "5",
      "6",
      "7 - I would decline the offer and continue the quest without getting involved in the festivities."
    ],
    category: "e",
  },
  {
    question: "10. In this new world, you are chosen to be part of a quest to retrieve a powerful artifact - a sentient sword that can save your country from an impending disaster. The journey involves navigating through enchanted forests, solving riddles, and clearing dungeons.<br><br>On your journey, you encounter a fellow traveler who is struggling with a difficult mechanical puzzle. How do you assist them?",
    type: "multiple-choice",
    options: [
      "1 - I eagerly offer my help, patiently explaining the puzzle and working together with them to solve it.",
      "2",
      "3",
      "4 - I would provide some assistance or advice, but would also be careful not to get too sidetracked.",
      "5",
      "6",
      "7 - I would not offer them any advice and would prioritize completing the quest rather than spending any time helping."
    ],
    category: "a",
  },
  {
    question: "11. In this new world, you are chosen to be part of a quest to retrieve a powerful artifact - a sentient sword that can save your country from an impending disaster. The journey involves navigating through enchanted forests, solving riddles, and clearing dungeons.<br><br>You receive a magical tome with information about events yet to come. How do you approach using the tome?",
    type: "multiple-choice",
    options: [
      "1 - I carefully study the tome, create an extensive plan that takes into account the future events precisely, and ensure every step aligns with this new plan.",
      "2",
      "3",
      "4 - While I consider the tome's information, I might also trust my instincts and be skeptical of its contents, being prepared to alter the plan as needed.",
      "5",
      "6",
      "7 - I might not use the information at all and prefer to explore the kingdom freely, trusting my intuition and the original plan."
    ],
    category: "c",
  },
  {
    question: "12. In this new world, you are chosen to be part of a quest to retrieve a powerful artifact - a sentient sword that can save your country from an impending disaster. The journey involves navigating through enchanted forests, solving riddles, and clearing dungeons.<br><br>During the quest, your party encounters a ferocious monster that engages you in battle. As a psychological attack, you are suddenly assaulted by visions of your worst fears. How do you handle this situation?",
    type: "multiple-choice",
    options: [
      "1 - I take a deep breath, acknowledge my fear, and courageously deflect the attacks, determined to overcome this enemy.",
      "2",
      "3",
      "4 - I might feel anxious but would continue the battle, knowing that my allies have my back.",
      "5",
      "6",
      "7 - I could be paralyzed by fear, finding it challenging to continue the quest and considering fleeing from the fight."
    ],
    category: "es",
  },
  {
    question: "13. In this new world, you are chosen to be part of a quest to retrieve a powerful artifact - a sentient sword that can save your country from an impending disaster. The journey involves navigating through enchanted forests, solving riddles, and clearing dungeons.<br><br>As a dungeon clear reward, you receive an ancient manuscript containing powerful spells. How do you react to this newfound knowledge?",
    type: "multiple-choice",
    options: [
      "1 - I am excited to explore the potential of the spells, eager to learn and experiment with the magical abilities.",
      "2",
      "3",
      "4 - While intrigued, I approach the manuscript with caution, considering the potential consequences of using the spells.",
      "5",
      "6",
      "7 - I might be hesitant to delve into the magical world, keeping the manuscript for future use but not prioritizing it at the moment."
    ],
    category: "o",
  },
  {
    question: "14. The following 5 questions take place in a different setting. The answer scale works the same way as before. Select the option on the scale that most closely matches what you would do in the situation.<br><br>You are a juror in a court trial. The trial involves a suspect, James Caplon Answell, being accused of the murder of his future father-in-law, Avory Hume. Hume was found dead in his office, impaled through the chest by a large arrow. The evidence includes Answell's fingerprints being found on the murder weapon, eyewitness testimonies placing him in the same room as the victim at the time of death, and the accused's lack of an alibi.<br><br>As a juror, you are required to discuss the case with fellow jurors during deliberation. How do you approach this interaction?",
    type: "multiple-choice",
    options: [
      "1 - I am likely to take charge, express my opinions confidently, and actively participate in the discussion.",
      "2",
      "3",
      "4 - I would contribute when necessary but may stay reserved if others are more vocal.",
      "5",
      "6",
      "7 - I am comfortable listening to others and would not actively engage in the discussion unless required."
    ],
    category: "e",
  },
  {
    question: "15. You are a juror in a court trial. The trial involves a suspect, James Caplon Answell, being accused of the murder of his future father-in-law, Avory Hume. Hume was found dead in his office, impaled through the chest by a large arrow. The evidence includes Answell's fingerprints being found on the murder weapon, eyewitness testimonies placing him in the same room as the victim at the time of death, and the accused's lack of an alibi.<br><br>During deliberations, you notice that some jurors are having a heated argument. How would you respond?",
    type: "multiple-choice",
    options: [
      "1 - I would try to mediate and find a compromise to maintain harmony among the jurors.",
      "2",
      "3",
      "4 - I might express my opinion calmly but avoid getting involved in the argument.",
      "5",
      "6",
      "7 - I would let the jurors resolve the disagreement on their own, as long as it doesn't disrupt the process."
    ],
    category: "a",
  },
  {
    question: "16. You are a juror in a court trial. The trial involves a suspect, James Caplon Answell, being accused of the murder of his future father-in-law, Avory Hume. Hume was found dead in his office, impaled through the chest by a large arrow. The evidence includes Answell's fingerprints being found on the murder weapon, eyewitness testimonies placing him in the same room as the victim at the time of death, and the accused's lack of an alibi.<br><br>As a juror, you are given a detailed set of instructions on how to evaluate the evidence. How would you handle this information?",
    type: "multiple-choice",
    options: [
      "1 - I would carefully review and follow the instructions, ensuring that my decision is based on the facts presented.",
      "2",
      "3",
      "4 - I would consider the instructions but may also rely on my instincts and personal judgment.",
      "5",
      "6",
      "7 - I might find the instructions too restrictive and prefer to trust my intuition in reaching a decision."
    ],
    category: "c",
  },
  {
    question: "17. You are a juror in a court trial. The trial involves a suspect, James Caplon Answell, being accused of the murder of his future father-in-law, Avory Hume. Hume was found dead in his office, impaled through the chest by a large arrow. The evidence includes Answell's fingerprints being found on the murder weapon, eyewitness testimonies placing him in the same room as the victim at the time of death, and the accused's lack of an alibi.<br><br>During the trial, the defense presents an emotional plea, depicting the accused as a victim of unfortunate circumstances. How would you react?",
    type: "multiple-choice",
    options: [
      "1 - I would not empathize at all with the emotional appeal and I would prioritize objective analysis of the evidence.",
      "2",
      "3",
      "4 - I might feel some sympathy but would try to remain focused on the facts and evidence.",
      "5",
      "6",
      "7 - I could be deeply moved by the emotional plea and find it challenging to separate emotions from the decision-making process."
    ],
    category: "es",
  },
  {
    question: "18. You are a juror in a court trial. The trial involves a suspect, James Caplon Answell, being accused of the murder of his future father-in-law, Avory Hume. Hume was found dead in his office, impaled through the chest by a large arrow. The evidence includes Answell's fingerprints being found on the murder weapon, eyewitness testimonies placing him in the same room as the victim at the time of death, and the accused's lack of an alibi.<br><br>The trial presents unexpected evidence that challenges the initial assumptions. The room was constructed in such a way that it may have been possible for a murderer to kill the victim from outside of the room. How do you adapt to this new information?",
    type: "multiple-choice",
    options: [
      "1 - I would be open-minded, consider the new evidence, and adjust my perspective accordingly.",
      "2",
      "3",
      "4 - While intrigued, I might be cautious about accepting the new evidence and would reevaluate it thoroughly.",
      "5",
      "6",
      "7 - I could be resistant to changing my initial opinions, preferring to stick with my original stance."
    ],
    category: "o",
  }
];


function startQuiz() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('page-footer').style.display = 'none';
  showQuestion();
}

function showQuestion() {
  const questionContainer = document.getElementById('quiz-content');
  questionContainer.innerHTML = "";

  const current = questions[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.className = 'question';

  if (current.type === "multiple-choice") {
    questionElement.innerHTML = `
      <p>${current.question}</p>
      ${current.options.map(option => `
        <input type="radio" name="answer" value="${option}" id="${option}">
        <label for="${option}">${option}</label><br>
      `).join('')}
      <button onclick="nextQuestion()">Next</button>
      <div id="feedbackText"></div>
    `;
  } else if (current.type === "checkbox") {
    questionElement.innerHTML = `
      <p>${current.question}</p>
      ${current.options.map(option => `
        <input type="checkbox" name="answer" value="${option}" id="${option}">
        <label for="${option}">${option}</label><br>
      `).join('')}
      <button onclick="nextQuestion()">Next</button>
      <div id="feedbackText"></div>
    `;
  } else if (current.type === "slider") {
    questionElement.innerHTML = `
      <p>${current.question}</p>
      <div class="slider-container">
        <span>${current.labels[0]}</span>
        <input type="range" name="answer" min="${current.min}" max="${current.max}" step="${current.step}" value="${Math.floor((current.min + current.max) / 2)}" id="sliderValue">
        <span>${current.labels[1]}</span>
      </div>
      <button onclick="nextQuestion()">Next</button>
      <div id="feedbackText"></div>
    `;

    const slider = questionElement.querySelector('#sliderValue');
    const output = questionElement.querySelector('#sliderOutput');

    slider.addEventListener('input', function () {
      output.textContent = slider.value;
    });
  }

  questionContainer.appendChild(questionElement);
}


function nextQuestion() {
  const current = questions[currentQuestion];
  let selectedAnswer;

  if (current.type === "multiple-choice") {
    selectedAnswer = document.querySelector('input[name="answer"]:checked');
    selectedAnswer = selectedAnswer ? selectedAnswer.value : "";
  } else if (current.type === "checkbox") {
    const checkboxes = document.querySelectorAll('input[name="answer"]');
    selectedAnswer = Array.from(checkboxes).map((checkbox, index) => checkbox.checked ? 1 : 0);
    // Update the answers array for checkbox question
    questions[currentQuestion].answers = selectedAnswer;
  } else if (current.type === "slider") {
    selectedAnswer = document.getElementById('sliderValue').value;
  }

  if (selectedAnswer !== undefined && selectedAnswer !== "") {
    // Convert selected answer to a numerical value based on its index in the options array
    const numericalValue = 7 - current.options.indexOf(selectedAnswer);

    // Store the answer for the current category
    answers[current.category] = answers[current.category] || [];
    answers[current.category].push(numericalValue);

    // Calculate and store the sum for the current category
    categorySums[current.category] = answers[current.category].reduce((sum, value) => sum + value, 0);

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  } else {
    const feedbackText = document.getElementById('feedbackText');
    if (feedbackText) {
      feedbackText.innerText = "Please select an answer before moving to the next question.";
    }
  }
}

function showResult() {
  const resultContainer = document.getElementById('quiz-content');
  const userResult = calculateResult();
  const similarityScore = calculateSimilarityScore(userResult);

  let additionalInfo = "";
  let imagePath = ""; // Add a variable to store the image path

  // Add conditional statements for different archetypes
  if (userResult.archetype === "Mrs. Graves") {
    additionalInfo = "Responsible &#9679; Practical &#9679; Hardworking &#9679; Loyal &#9679; Detail Oriented<br><br>Motivation: To be good, to have integrity, to be in balance with everything<br><br>Dislikes sloppiness and error, attracted to order and high standards for self and others.";
    imagePath = "img/mrs_graves.png";
  } else if (userResult.archetype === "Ashley Graves") {
    additionalInfo = "Helpful &#9679; Nurturing &#9679; Warm &#9679; Approachable &#9679; Patient<br><br>Motivation: To be loved unconditionally<br><br>Dislikes solitude and impersonal dealings, attracted to service and making personal connections.";
    imagePath = "img/ashley.png";
  } else if (userResult.archetype === "The Lady") {
    additionalInfo = "Confident &#9679; Ambitious &#9679; Self-conscious &#9679; Productive &#9679; Energetic<br><br>Motivation: To feel valuable and worthwhile (not to disappoint others)";
    imagePath = "img/lady.png";
  } else if (userResult.archetype === "Nina") {
    additionalInfo = "Creative &#9679; Emotional &#9679; Open &#9679; Offbeat &#9679; Introspective<br><br>Motivation: To find themselves and their significance (to create an identity out of their inner experience)<br><br>Dislikes uniformity and regulation, attracted to creativity and putting their personal mark on things.";
    imagePath = "img/nina.png";
  } else if (userResult.archetype === "Andrew Graves") {
    additionalInfo = "Self-sufficient &#9679; Insightful &#9679; Withdrawn &#9679; Analytical &#9679; Introverted<br><br>Motivation: To be capable and competent (to have something to contribute)<br><br>Dislikes intrusions on their time and space, attracted to depth and learning.";
    imagePath = "img/andrew.png";
  } else if (userResult.archetype === "Cult Leader") {
    additionalInfo = "Vigilant &#9679; Organized &#9679; Skeptical &#9679; Trustworthy &#9679; Detail-oriented<br><br>Motivation: To find security and support (to belong somewhere)<br><br>Dislikes unpredictability and rapid change, attracted to clear structures and foresight.";
    imagePath = "img/cult_leader.png";
  } else if (userResult.archetype === "Julia") {
    additionalInfo = "Enthusiastic &#9679; Curious &#9679; Outgoing &#9679; Optimistic &#9679; Spontaneous<br><br>Motivation: To be satisfied and content - to have their needs fulfilled<br><br>Dislikes limitations and routines, attracted to new possibilities and excitement.";
    imagePath = "img/julia.png";
  } else if (userResult.archetype === "???") {
    additionalInfo = "Confident &#9679; Independent &#9679; Energetic &#9679; Headstrong &#9679; Natural Leader<br><br>Motivation: To protect themselves (to be in control of their own life and destiny)<br><br>Dislikes indecisiveness and indirectness, attracted to strength and strategic action.";
    imagePath = "img/entity.png";
  } else if (userResult.archetype === "Mr. Graves") {
    additionalInfo = "Calm &#9679; Agreeable &#9679; Headstrong &#9679; Humble &#9679; Persuasive<br><br>Motivation: To have inner stability (peace of mind)<br><br>Dislikes tension and conflict, attracted to harmony and stability.";
    imagePath = "img/mr_graves.png";
  }

  resultContainer.innerHTML = `
    <div id="result">
      <h2>Your Character Type</h2>
      <p>Based on your answers, you are: <strong>${userResult.archetype}</strong></p>
      <p>Similarity Score: <strong>${similarityScore.toFixed(2)}</strong></p>
      <p>${additionalInfo}</p>
      <img src="${imagePath}" alt="${userResult.archetype} Image"> <!-- Display the archetype-specific image -->
      <button onclick="showShare()" id="showShareBtn">Share Result</button>
      <button onclick="showAnalysis()" id="showAnalysisBtn">Show Analysis</button>
      <button onclick="showSecondary()" id="showSecondaryBtn">Show Secondary Type</button>
      <button onclick="showDebug()" id="showDebugBtn">Show Debug</button>
    </div>
  `;
}

function showShare() {
  const shareContainer = document.getElementById('share');
  const userResult = calculateResult();

  if (!shareContainer) {
    const newShareContainer = document.createElement('div');
    newShareContainer.id = 'share';
    newShareContainer.innerHTML = `
      <p>My TCAL Personality Test result is **${userResult.archetype}** with a similarity score of ${userResult.similarityScore.toFixed(2)}. https://llamawa.re/TCAL-Personality/test.html</p>
    `;
    document.getElementById('quiz-content').appendChild(newShareContainer);
  }
  // Disable the button after it's clicked
  const showShareBtn = document.getElementById('showShareBtn');
  if (showShareBtn) {
    showShareBtn.disabled = true;
  }
}

function showAnalysis() {
  const analysisContainer = document.getElementById('analysis');
  const userResult = calculateResult();

  if (!analysisContainer) {
    const newAnalysisContainer = document.createElement('div');
    newAnalysisContainer.id = 'analysis';

    let additionalInfo = "";

    // Add conditional statements for different archetypes
    if (userResult.archetype === "Mrs. Graves") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Ashley Graves") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "The Lady") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Nina") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Andrew Graves") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Cult Leader") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Julia") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "???") {
      additionalInfo = "[No data]";
    } else if (userResult.archetype === "Mr. Graves") {
      additionalInfo = "[No data]";
    }

    newAnalysisContainer.innerHTML = `
	  <h3>Analysis</h3>
      <p>${additionalInfo}</p>
    `;

    document.getElementById('quiz-content').appendChild(newAnalysisContainer);
  }
  // Disable the button after it's clicked
  const showAnalysisBtn = document.getElementById('showAnalysisBtn');
  if (showAnalysisBtn) {
    showAnalysisBtn.disabled = true;
  }
}

function showSecondary() {
  const secondaryContainer = document.getElementById('secondary');
  const userResult = calculateResult();

  if (!secondaryContainer) {
    const newSecondaryContainer = document.createElement('div');
    newSecondaryContainer.id = 'secondary';
    newSecondaryContainer.innerHTML = `
	  <h3>Secondary Type</h3>
      <p>Not satisfied with your result? According to our calculations, it may be possible that you are: <strong>${userResult.secondaryArchetype}</strong></p>
      <p>Similarity Score: <strong>${userResult.secondarySimilarityScore.toFixed(2)}</strong></p>
    `;
    document.getElementById('quiz-content').appendChild(newSecondaryContainer);
  }
  // Disable the button after it's clicked
  const showSecondaryBtn = document.getElementById('showSecondaryBtn');
  if (showSecondaryBtn) {
    showSecondaryBtn.disabled = true;
  }
}

function showDebug() {
  const debugContainer = document.getElementById('debug');

  if (!debugContainer) {
    const newDebugContainer = document.createElement('div');
    newDebugContainer.id = 'debug';

    // Calculate average score for each category
    const averageScores = {};
    for (const category in answers) {
      const values = answers[category];
      const average = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2); // Truncate to 2 decimal places
      averageScores[category] = average;
    }

    newDebugContainer.innerHTML = `
      <h3>Debug Info</h3>
      ${Object.keys(answers).map(category => `
        <h4>${category}: ${averageScores[category]}</h4>
        <ul>
          ${answers[category].map((answer, index) => `<li><strong>q${index + 1}:</strong> ${answer}</li>`).join('')}
        </ul>
      `).join('')}
    `;

    document.getElementById('quiz-content').appendChild(newDebugContainer);
  }

  // Disable the button after it's clicked
  const showDebugBtn = document.getElementById('showDebugBtn');
  if (showDebugBtn) {
    showDebugBtn.disabled = true;
  }
}

function calculateResult() {
  const archetypeScores = {
    "Mrs. Graves": { e: 2.5, es: 2.5, a: 4 , o: 2.5, c: 7, x: 3, },
    "Ashley Graves": { e: 5.5, es: 4, a: 5.5 , o: 4, c: 4, x: 4.5, },
    "The Lady": { e: 5.5, es: 4, a: 4 , o: 4, c: 4, x: 5, },
    "Nina": { e: 4, es: 2.5, a: 4 , o: 5.5, c: 4, x: 2.5, },
    "Andrew Graves": { e: 1, es: 4, a: 1 , o: 5.5, c: 4, x: 4, },
    "Cult Leader": { e: 4, es: 2.5, a: 4 , o: 1, c: 4, x: 5.5, },
    "Julia": { e: 7, es: 5.5, a: 4 , o: 5.5, c: 2.5, x: 3.5, },
    "???": { e: 7, es: 7, a: 2.5 , o: 5.5, c: 5.5, x: 6, },
    "Mr. Graves": { e: 2.5, es: 5.5, a: 5.5 , o: 1, c: 2.5, x: 2, },
  };

  const typeAverages = {};
  let totalPossibleDifference = 0; // Initialize totalPossibleDifference

  // Calculate average answer values for each question type and sum up the total possible difference
  for (const category in answers) {
    const values = answers[category];
    const average = values.reduce((sum, value) => sum + value, 0) / values.length;
    typeAverages[category] = average;

    // Calculate the maximum possible difference for this category (considering the full range of possible answers)
    totalPossibleDifference += 6;
  }

  // Find the archetype with the closest similarity score
  let minDifference = Number.MAX_SAFE_INTEGER;
  let closestArchetype = null;

  // For secondary archetype
  let secondMinDifference = Number.MAX_SAFE_INTEGER;
  let secondClosestArchetype = null;

  for (const archetype in archetypeScores) {
    const archetypeScore = archetypeScores[archetype];
    let difference = 0;

    // Calculate the difference between the user's answers and archetype scores
    for (const category in archetypeScore) {
      const userAverage = typeAverages[category] || 0; // Default to 0 if the user didn't answer a question in this category
      difference += Math.abs(userAverage - archetypeScore[category]);
    }

    // Update the closest and secondary archetypes if the current difference is smaller
    if (difference < minDifference) {
      secondMinDifference = minDifference; // Move the current closest difference to the secondary
      secondClosestArchetype = closestArchetype;

      minDifference = difference;
      closestArchetype = archetype;
    } else if (difference < secondMinDifference) {
      secondMinDifference = difference;
      secondClosestArchetype = archetype;
    }
  }

  // Return both the primary and secondary archetypes and similarity scores as an object
  return {
    archetype: closestArchetype,
    similarityScore: 1 - minDifference / totalPossibleDifference,
    secondaryArchetype: secondClosestArchetype,
    secondarySimilarityScore: 1 - secondMinDifference / totalPossibleDifference,
  };
}

function calculateSimilarityScore(userResult) {
  // Access the similarity score from the calculated result
  return userResult.similarityScore;
}

// Function to generate a random number between 0 and 1
function getRandomNumber() {
  return Math.random();
}

// Function to set the image source based on a random number
function setRandomImage() {
  // Get the reference to the image element
  var introImage = document.querySelector('#intro img');

  var randomValue = getRandomNumber();
  if (randomValue < 0.3) {
    introImage.src = 'img/profile_jp.png';
  }
}

window.onload = setRandomImage;