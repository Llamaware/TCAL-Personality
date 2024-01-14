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
    question: "3. You learn that you live in a simulation where it is permanently the year 1999. One day, a strange man in a coat walks up to you and offers you two options.<br><br>Option 1: Exit the simulation to the real world.<br><br>Option 2: Forget that you ever learned this and keep living on in this rather stable environment.<br><br>You do not know what the outside world is like. You also do not know if you will ever learn this information again if you choose to forget it.<br><br>What would you choose to do?",
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
    "Person 1: An engineer who donates a few thousand dollars to charity every year. Once robbed a Taco Bell. Currently works for the government in research and development for weapons, such as bombs and missiles.",
    "Person 2: A former serial killer, successfully reintegrated into society after spending ten years in a psychiatric institution. Currently works in a post office.",
    "Person 3: A researcher who will develop a vaccine for HIV by next year. Has a woman trapped in his basement against her will.",
    "Person 4: Is a 2 month old baby. Has a 0.01% chance of causing World War 3.",
    "Person 5: Runs a no kill animal shelter. Beats her children.",
    "Person 6: A social worker who makes free food for the homeless. Has depression and several suicide attempts in the past. Currently wants to die.",
    "Person 7: A computer programmer and true crime enthusiast. Has plans to murder and cannibalize someone three months from now, just to see what it's like.",
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
      "7 - I would not adjust well at all to life in this new world. I might become depressed, and in the worst case, I would not be able to function at all.",
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
      "7 - I would decline the offer and continue the quest without getting involved in the festivities.",
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
      "7 - I would not offer them any advice and would prioritize completing the quest rather than spending any time helping.",
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
      "7 - I might not use the information at all and prefer to explore the kingdom freely, trusting my intuition and the original plan.",
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
      "7 - I could be paralyzed by fear, finding it challenging to continue the quest and considering fleeing from the fight.",
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
      "7 - I might be hesitant to delve into the magical world, keeping the manuscript for future use but not prioritizing it at the moment.",
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
      "7 - I am comfortable listening to others and would not actively engage in the discussion unless required.",
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
      "7 - I would let the jurors resolve the disagreement on their own, as long as it doesn't disrupt the process.",
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
      "7 - I might find the instructions too restrictive and prefer to trust my intuition in reaching a decision.",
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
      "7 - I could be deeply moved by the emotional plea and find it challenging to separate emotions from the decision-making process.",
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
      "7 - I could be resistant to changing my initial opinions, preferring to stick with my original stance.",
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
    additionalInfo = "Responsible &#9679; Practical &#9679; Hardworking &#9679; Loyal &#9679; Detail Oriented";
    imagePath = "img/mrs_graves.png";
  } else if (userResult.archetype === "Ashley Graves") {
    additionalInfo = "Helpful &#9679; Nurturing &#9679; Warm &#9679; Approachable &#9679; Patient";
    imagePath = "img/ashley.png";
  } else if (userResult.archetype === "The Lady") {
    additionalInfo = "Confident &#9679; Ambitious &#9679; Self-conscious &#9679; Productive &#9679; Energetic";
    imagePath = "img/lady.png";
  } else if (userResult.archetype === "Nina") {
    additionalInfo = "Creative &#9679; Emotional &#9679; Open &#9679; Offbeat &#9679; Introspective";
    imagePath = "img/nina.png";
  } else if (userResult.archetype === "Andrew Graves") {
    additionalInfo = "Self-sufficient &#9679; Insightful &#9679; Withdrawn &#9679; Analytical &#9679; Introverted";
    imagePath = "img/andrew.png";
  } else if (userResult.archetype === "Cult Leader") {
    additionalInfo = "Vigilant &#9679; Organized &#9679; Skeptical &#9679; Trustworthy &#9679; Detail-oriented";
    imagePath = "img/cult_leader.png";
  } else if (userResult.archetype === "Julia") {
    additionalInfo = "Enthusiastic &#9679; Curious &#9679; Outgoing &#9679; Optimistic &#9679; Spontaneous";
    imagePath = "img/julia.png";
  } else if (userResult.archetype === "??? (Entity)") {
    additionalInfo = "Confident &#9679; Independent &#9679; Energetic &#9679; Headstrong &#9679; Natural Leader";
    imagePath = "img/entity.png";
  } else if (userResult.archetype === "Mr. Graves") {
    additionalInfo = "Calm &#9679; Agreeable &#9679; Headstrong &#9679; Humble &#9679; Persuasive";
    imagePath = "img/mr_graves.png";
  }

  resultContainer.innerHTML = `
    <div id="result">
      <h2>Your Character Type</h2>
      <p>Based on your answers, you are: <strong>${userResult.archetype}</strong></p>
      <p>Similarity Score: <strong>${similarityScore.toFixed(3)}</strong></p>
      <p>${additionalInfo}</p>
      <img src="${imagePath}" alt="${userResult.archetype} Image"> <!-- Display the archetype-specific image -->
      <button onclick="showShare()" id="showShareBtn">Share Result</button>
      <button onclick="showAnalysis()" id="showAnalysisBtn">Show Analysis</button>
      <button onclick="showSecondary()" id="showSecondaryBtn">Show Secondary Type</button>
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
      <p>My TCAL Personality Test result is **${userResult.archetype}** with a similarity score of ${userResult.similarityScore.toFixed(3)}. My secondary type is ${userResult.secondaryArchetype} (${userResult.secondarySimilarityScore.toFixed(3)}). https://llamawa.re/TCAL-Personality/test.html</p>
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
    let motivation = "";
    let recommendations = "";

    // Add conditional statements for different archetypes
    if (userResult.archetype === "Mrs. Graves") {
      motivation = `To be good, to have integrity, to be in balance with everything.<br><br><em>Dislikes sloppiness and error, attracted to order and high standards for self and others.</em>`;

      additionalInfo = `You are <strong>Mrs. Graves</strong>, the Reformer. You have a "sense of mission" that leads you to want to improve the world in various ways, using whatever degree of influence you have. You strive to overcome adversity&#8212;particularly moral adversity&#8212;so that the human spirit can shine through and make a difference. You strive after "higher values", even at the cost of great personal sacrifice.<br><br>
      You are a person of practical action&#8212;you wish to be useful in the best sense of the word. On some level of consciousness, you feel that you "have a mission" to fulfill in life, if only to try your best to reduce the disorder you see in your environment.<br><br>
      In the effort to stay true to your principles, you resist being affected by your instinctual drive, consciously not giving in to it or expressing it too freely. The result is a personality type that has problems with repression, resistance, and aggression. You are usually seen by others as highly self-controlled, even rigid, although this is not how you experience yourself. It seems to you that you are sitting on a cauldron of passions and desires, and you had better "keep the lid on" lest you and everyone else around you regret it.`;

      recommendations = `You have a lot to teach others and are probably a good teacher, but do not expect others to change immediately. What is obvious to you may not be as obvious to them, especially if they are not used to being as self-disciplined and objective about themselves as you are about yourself. Many people may also want to do what is right and may agree with you in principle but for various reasons simply cannot change right away. The fact that others do not change immediately according to your prescriptions does not mean that they will not change sometime in the future. Your words and above all, your example may do more good than you realize, although they may take longer than you expect. So have patience.<br><br>
      It is easy for you to work yourself up into a lather about the wrongdoings of others. And it may sometimes be true that they are wrong. But what is it to you? Your irritation with them will do nothing to help them see another way of being. Similarly, beware of your constant irritation with your own "shortcomings". Does your own harsh self-criticism really help you to improve? Or does it simply make you tense, nervous, and self-doubting?`;
    } else if (userResult.archetype === "Ashley Graves") {
      motivation = `To be loved unconditionally.<br><br><em>Dislikes solitude and impersonal dealings, attracted to service and making personal connections.</em>`;

      additionalInfo = `You are <strong>Ashley Graves</strong>, the Helper. You are generous, empathetic, and demonstrative. You are a people person and you love to support and take care of others. At your best, you are unselfish and altruistic, but when you are less healthy, you can be a people pleaser and overly possessive of those you love. Your deepest desire is to feel loved and your greatest fear is of being unwanted or unworthy of love. This drives you to make yourself indispensable to others.<br><br>
      Your inner development may be limited by your "shadow side"&#8212;pride, self-deception, the tendency to become over-involved in the lives of others, and the tendency to manipulate others to get your own emotional needs met. Transformational work entails going into dark places in ourselves, and this very much goes against the grain of your personality structure, which prefers to see itself in only the most positive, glowing terms.<br><br>
      As a child, you may have grown up in an environment where you felt like your basic emotional needs were not met. So you learned how to adapt to others' expectations early on and repress your own desires in an effort to support other people.<br><br>
      You assume the martyr role in relationships and constantly seek ways to feel important by attending to others' needs. You feel fulfilled when others remind you how grateful they are to have you in their lives, and work hard to maintain this image of the constantly accessible friend. By continuously attending to others' needs, you may burn out and overcompensate for your energy levels. You may use flattery or compliments in order to gain acceptance and appreciation within a community or relationship. You're hypersensitive to the approval and appraisal of others, especially those you truly care about.`;

      recommendations = `First and foremost, remember that if you are not addressing your own needs, it is highly unlikely that you will be able to meet anyone else's needs without problems, underlying resentments, and continual frustration. Further, you will be less able to respond to people in a balanced way if you have not gotten adequate rest, and taken care of yourself properly. It is not selfish to make sure that you are okay before attending to others' needs&#8212;it is simply common sense.<br><br>
      Try to become more conscious of your own motives when you decide to help someone. While doing good things for people is certainly an admirable trait, when you do so because you expect the other person to appreciate you or do something nice for you in return, you are setting yourself up for disappointments. Your type has a real danger of falling into unconscious codependent patterns with loved ones, and they almost never bring you what you really want.`;
    } else if (userResult.archetype === "The Lady") {
      motivation = `To feel valuable and worthwhile (not to disappoint others).`;

      additionalInfo = `You are <strong>The Lady</strong> from Room 302, the Achiever. You want to make sure your life is a success, however that is defined by your family, your culture, and your social sphere. In some families, success means having a lot of money, a grand house, a new, expensive car, and other status symbols. Others value ideas, and success to you means distinguishing yourself in academic or scientific worlds. Success in other circles might mean becoming famous as an actor, or model, or writer, or as a public figure of some kind, perhaps as a politician. A religious family might encourage you to become a minister, priest, or rabbi since these professions have status in their community and in the eyes of the family. No matter how success is defined, you will try to become somebody noteworthy in your family and your community. You will not be a "nobody".<br><br>
      To this end, you learned to perform in ways that will garner you praise and positive attention. As a child, you learned to recognize the activities that were valued by your parents or peers and put your energies into excelling in those activities. You also learned how to cultivate and develop whatever about you is attractive or potentially impressive.<br><br>
      The problem is that, in your headlong rush to achieve whatever you believe will make you more valuable, you can become so alienated from yourself that you no longer know what you truly want, or what your real feelings or interests are. In this state, you are easy prey to self-deception, deceit, and falseness of all kinds. Thus, the deeper problem is that your search for a way to be of value increasingly takes you further away from your own Essential Self with its core of real value. From your earliest years, as you become dependent on receiving attention from others and in pursuing the values that others reward, you gradually lose touch with yourself. Step by step, your own inner core, your "heart's desire," is left behind until you no longer recognize it.`;

      recommendations = `For our real development, it is essential to be truthful. Be honest with yourself and others about your genuine feelings and needs. Likewise, resist the temptation to impress others or inflate your importance. You will impress people more deeply by being authentic than by bragging about your successes or exaggerating your accomplishments.<br><br>
      Take breaks. You can drive yourself and others to exhaustion with your relentless pursuit of your goals. Ambition and self-development are good qualities, but temper them with rest periods in which you reconnect more deeply with yourself. Sometimes taking three to five deep breaths is enough to recharge your battery and improve your outlook.`;
    } else if (userResult.archetype === "Nina") {
      motivation = `To find themselves and their significance (to create an identity out of their inner experience).<br><br><em>Dislikes uniformity and regulation, attracted to creativity and putting their personal mark on things.</em>`;

      additionalInfo = `You are <strong>Nina</strong>, the Individualist. You maintain your identity by seeing yourself as fundamentally different from others. You feel that you are unlike other human beings, and consequently, that no one can understand you or love you adequately. You may see yourself as uniquely talented, possessing special, one-of-a-kind gifts, but also as uniquely disadvantaged or flawed. You are acutely aware of and focused on your personal differences and deficiencies.<br><br>
      While it is true that you often feel different from others, you do not really want to be alone. You may feel socially awkward or self-conscious, but you deeply wish to connect with people who understand you and your feelings. You long for someone to come into your life and appreciate the secret self that you have privately nurtured and hidden from the world. If, over time, such validation remains out of reach, you begin to build your identity around how unlike everyone else you are. (The outsider therefore comforts herself by becoming an insistent individualist: everything must be done on her own, in her own way, on her own terms.) Your mantra becomes "I am myself. Nobody understands me. I am different and special," while you secretly wish you could enjoy the easiness and confidence that others seem to enjoy.<br><br>
      As long as you believe that there is something fundamentally wrong with you, you cannot allow yourself to experience or enjoy your many good qualities. To acknowledge your good qualities would be to lose your sense of identity (as a suffering victim) and to be without a relatively consistent personal identity (your Basic Fear). You will grow by learning to see that much of your story is not true—or at least it is not true any more. The old feelings begin to fall away once you stop telling yourself your old tale: it is irrelevant to who you are right now.`;

      recommendations = `Avoid putting off things until you are "in the right mood." Commit yourself to productive, meaningful work that will contribute to your good and that of others, no matter how small the contribution may be. Working consistently in the real world will create a context in which you can discover yourself and your talents. (Actually, you are happiest when you are working&#8212;that is, activating your potentials and realizing yourself. You will not "find yourself" in a vacuum or while waiting for inspiration to strike, so connect&#8212;and stay connected&#8212;with the real world.)<br><br>
      Self-esteem and self-confidence will develop only from having positive experiences, whether or not you believe that you are ready to have them. Therefore, put yourself in the way of good. You may never feel that you are ready to take on a challenge of some sort, that you always need more time. (You typically never feel that you are sufficiently "together," but you must nevertheless have the courage to stop putting off your life.) Even if you start small, commit yourself to doing something that will bring out the best in you.<br><br>
      Avoid lengthy conversations in your imagination, particularly if they are negative, resentful, or even excessively romantic. These conversations are essentially unreal and at best only rehearsals for action&#8212;although, as you know, you almost never say or do what you imagine you will. Instead of spending time imagining your life and relationships, begin to live them.`;
    } else if (userResult.archetype === "Andrew Graves") {
      motivation = `To be capable and competent (to have something to contribute).<br><br><em>Dislikes intrusions on their time and space, attracted to depth and learning.</em>`;

      additionalInfo = `You are <strong>Andrew Graves</strong>, the Investigator. You want to find out why things are the way they are. You want to understand how the world works, whether it is the cosmos, the microscopic world, the animal, vegetable, or mineral kingdoms&#8212;or the inner world of your imagination. You are always searching, asking questions, and delving into things in depth. You do not accept received opinions and doctrines, feeling a strong need to test the truth of most assumptions for yourself.<br><br>
      You spend a lot of time observing and contemplating&#8212;listening to the sounds of wind or of a synthesizer, or taking notes on the activities in an anthill in your backyard. As you immerse yourself in your observations, you begin to internalize your knowledge and gain a feeling of self-confidence. You can then go out and play a piece on the synthesizer or tell people what you know about ants. You may also stumble across exciting new information or make new creative combinations (playing a piece of music based on recordings of wind and water). When you get verification of your observations and hypotheses, or see that others understand your work, it is a confirmation of your competency, and this fulfills your Basic Desire. ("You know what you are talking about.")<br><br>
      Knowledge, understanding, and insight are thus highly valued by you, because your identity is built around "having ideas" and being someone who has something unusual and insightful to say. For this reason, you are not interested in exploring what is already familiar and well-established; rather, your attention is drawn to the unusual, the overlooked, the secret, the occult, the bizarre, the fantastic, the "unthinkable." Investigating "unknown territory"&#8212;knowing something that others do not know, or creating something that no one has ever experienced&#8212;allows you to have a niche for yourself that no one else occupies. You believe that developing this niche is the best way that you can attain independence and confidence.<br><br>
      Thus, for your own security and self-esteem, you need to have at least one area in which you have a degree of expertise that will allow you to feel capable and connected with the world. You think, "I am going to find something that I can do really well, and then I will be able to meet the challenges of life. But I can't have other things distracting me or getting in the way."`;

      recommendations = `You see many possibilities but often do not know how to choose among them or judge which is more or less important. When you are caught in your fixation, a sense of perspective can be missing, and with it the ability to make accurate assessments. At such time, it can be helpful to get the advice of someone whose judgment you trust while you are gaining perspective on your situation. Doing this can also help you trust someone else, a difficulty for your type.<br><br>
      You tend to find it difficult to trust people, to open up to them emotionally, or to make yourself accessible in various ways. Your awareness of potential problems in relationships may tend to create a self-fulfilling prophecy. It is important to remember that having conflicts with others is not unusual and that the healthy thing is to work them out rather than reject attachments with people by withdrawing into isolation. Having one or two intimate friends whom you trust enough to have conflicts with will enrich your life greatly.`;

    } else if (userResult.archetype === "Cult Leader") {
      motivation = `To find security and support (to belong somewhere).<br><br><em>Dislikes unpredictability and rapid change, attracted to clear structures and foresight.</em>`;

      additionalInfo = `You are the <strong>Cult Leader</strong>, the Loyalist. Of all the personality types, you are the most loyal to your friends and your beliefs. You will "go down with the ship" and hang on to relationships of all kinds far longer than most other types. You are also loyal to ideas, systems, and beliefs&#8212;even to the belief that all ideas or authorities should be questioned or defied. Indeed, you might not go along with the "status quo": your beliefs may be rebellious and anti-authoritarian, even revolutionary. In any case, you will typically fight for your beliefs more fiercely than you will fight for yourself, and you will defend your community or family more tenaciously than you will defend yourself.<br><br>
      The reason you are so loyal to others is that you do not want to be abandoned and left without support&#8212;your Basic Fear. Thus, the central issue for you is a failure of self-confidence. You come to believe that you do not possess the internal resources to handle life's challenges and vagaries alone, and so increasingly rely on structures, allies, beliefs, and supports outside yourself for guidance to survive. If suitable structures do not exist, you will help create and maintain them.<br><br>
      The biggest problem for you is that you try to build safety in the environment without resolving your own emotional insecurities. When you learn to face your anxieties, however, you understand that although the world is always changing and is, by nature, uncertain, you can be serene and courageous in any circumstance. And you can attain the greatest gift of all, a sense of peace with yourself despite the uncertainties of life.`;

      recommendations = `Remember that there is nothing unusual about being anxious since everyone is anxious and much more often than you might think. Learn to be more present to your anxiety, to explore it, and to come to terms with it. Work creatively with your tensions without turning to excessive amounts of alcohol (or other drugs) to allay them. In fact, if you are present and breathing fully, anxiety can be energizing, a kind of tonic that can help make you more productive and aware of what you are doing.<br><br>
      Work on becoming more trusting. There are doubtless several people in your life you can turn to who care about you and who are trustworthy. If not, go out of your way to find someone trustworthy, and allow yourself to get close to that person. This will mean risking rejection and stirring up some of your deepest fears, but the risk is worth taking. You have a gift for getting people to like you, but you are unsure of yourself and may be afraid of making a commitment to them. Therefore, come down clearly on one side or the other of the fence in your relationships. Let people know how you feel about them.`;
    } else if (userResult.archetype === "Julia") {
      motivation = `To be satisfied and content&#8212;to have their needs fulfilled.<br><br><em>Dislikes limitations and routines, attracted to new possibilities and excitement.</em>`;

      additionalInfo = `You are <strong>Julia</strong>, the Enthusiast. You are enthusiastic about almost everything that catches your attention. You approach life with curiosity, optimism, and a sense of adventure, like "a kid in a candy store" who looks at the world in wide-eyed, rapt anticipation of all the good things you are about to experience. You are bold and vivacious, pursuing what you want in life with cheerful determination. You have a quality best described by the Yiddish word "chutzpah"&#8212;a kind of brash "nerviness."<br><br>
      Your thinking is anticipatory: you foresee events and generate ideas "on the fly," favoring activities that stimulate your mind—which in turn generate more things to do and think about. You are not necessarily intellectual or studious by any standard definition, although you are often intelligent and can be widely read and highly verbal. Your mind moves rapidly from one idea to the next, making you gifted at brainstorming and synthesizing information. You are exhilarated by the rush of ideas and by the pleasure of being spontaneous, preferring broad overviews and the excitement of the initial stages of the creative process to probing a single topic in depth.<br><br>
      Ironically, your wide-ranging curiosity and ability to learn quickly can also create problems for you. Because you are able to pick up many different skills with relative ease, it becomes more difficult for you to decide what to do with yourself. As a result, you also do not always value your abilities as you would if you had to struggle to gain them.<br><br>
      Furthermore, as you speed up your pursuit of whatever seems to offer freedom and satisfaction, you tend to make worse choices, and you are less able to be satisfied because everything is experienced indirectly, through the dense filter of your fast-paced mental activity. The result is that you end up anxious, frustrated, and enraged, with fewer resources available to you physically, emotionally, or financially. You may end up ruining your health, your relationships, and your finances in your search for happiness.`;

      recommendations = `Recognize your impulsiveness, and get in the habit of observing your impulses rather than giving in to them. This means letting most of your impulses pass and becoming a better judge of which ones are worth acting on. The more you can resist acting out your impulses, the more you will be able to focus on what is really good for you.<br><br>
      Learn to listen to other people. They are often interesting, and you may learn things that will open new doors for you. Also learn to appreciate silence and solitude: you do not have to distract yourself (and protect yourself from anxiety) with constant noise from the television or the stereo. By learning to live with less external stimulation, you will learn to trust yourself. You will be happier than you expect because you will be satisfied with whatever you do, even if it is less than you have been doing.`;
    } else if (userResult.archetype === "??? (Entity)") {
      motivation = `To protect themselves (to be in control of their own life and destiny).<br><br><em>Dislikes indecisiveness and indirectness, attracted to strength and strategic action.</em>`;

      additionalInfo = `You are <strong>???</strong>, the Challenger. You enjoy taking on challenges yourself as well as giving others opportunities that challenge them to exceed themselves in some way. You are charismatic and have the physical and psychological capacities to persuade others to follow you into all kinds of endeavors&#8212;from starting a company, to rebuilding a city, to running a household, to waging war, to making peace.<br><br>
      Although, to some extent, you fear physical harm, far more important is your fear of being disempowered or controlled in some way. You are extraordinarily tough and can absorb a great deal of physical punishment without complaint—a double-edged blessing since you often take your health and stamina for granted and overlook the health and well-being of others as well. Yet, you are desperately afraid of being hurt emotionally and will use your physical strength to protect your feelings and keep others at a safe emotional distance. Beneath the tough façade is vulnerability, although it has been covered over by a layer of emotional armor.<br><br>
      Thus, you are often extremely industrious, but at the price of losing emotional contact with many of the people in your life. Those close to you may become increasingly dissatisfied with this state of affairs, which may confound you. ("I don't understand what my family is complaining about. I bust my hump to provide for them. Why are they disappointed with me?")<br><br>
      When you are emotionally healthy, however, you have a resourceful, "can-do" attitude as well as a steady inner drive. You take the initiative and make things happen with a great passion for life. You are honorable and authoritative&#8212;a natural leader who has a solid, commanding presence. Your groundedness gives you abundant “common sense” as well as the ability to be decisive. You are willing to “take the heat,” knowing that any decision cannot please everyone. But as much as possible, you want to look after the interests of the people in your charge without playing favorites. You use your talents and fortitude to construct a better world for everyone in your life.`;

      recommendations = `It goes against the grain, but act with self-restraint. You show true power when you forbear from asserting your will with others, even when you could. Your real power lies in your ability to inspire and uplift people. You are at your best when you take charge and help everyone through a crisis. Few will take advantage of you when you are caring, and you will do more to secure the loyalty and devotion of others by showing the greatness of your heart than you ever could by displays of raw power.<br><br>
      Remember that the world is not against you. Many people in your life care about you and look up to you, but when you are in your fixation, you do not make this easy for them. Let in the affection that is available. Doing this will not make you weak, but will confirm the strength and support in yourself and your life. Also remember that by believing that others are against you and reacting against them, you tend to alienate them and confirm your own fears. Take stock of the people who truly are on your side, and let them know how important they are to you.`;
    } else if (userResult.archetype === "Mr. Graves") {
      motivation = `To have inner stability (peace of mind).<br><br><em>Dislikes tension and conflict, attracted to harmony and stability.</em>`;

      additionalInfo = `You are <strong>Mr. Graves</strong>, the Peacemaker. You are devoted to the quest for internal and external peace for yourself and others. You work to maintain your peace of mind just as you work to establish peace and harmony in your world.<br><br>
      You may very well have the strength of the Entity (???), the sense of fun and adventure of Julia, the dutifulness of the Cult Leader, the intellectualism of Andrew, the creativity of Nina, the attractiveness of The Lady, the generosity of Ashley, and the idealism of Mrs. Graves. However, what you generally do not have is a sense of really inhabiting yourself&#8212;a strong sense of your own identity.<br><br>
      Ironically, therefore, the only type you are not like is Mr. Graves himself. Being a separate self, an individual who must assert yourself against others, is terrifying to you. You would rather melt into someone else or quietly follow your idyllic daydreams.
      You demonstrate the universal temptation to ignore the disturbing aspects of life and to seek some degree of peace and comfort by "numbing out." You respond to pain and suffering by attempting to live in a state of premature peacefulness, whether it is in a state of false spiritual attainment, or in more gross denial. More than any other type, you demonstrate the tendency to run away from the paradoxes and tensions of life by attempting to transcend them or by seeking to find simple and painless solutions to your problems.`;

      recommendations = `Exert yourself. Force yourself to pay attention to what is going on. Do not drift off or tune out people, or daydream. Work on focusing your attention to become an active participant in the world around you. Try to become more mentally and emotionally engaged.<br><br>
      Recognize that you also have aggressions, anxieties, and other feelings that you must deal with. Negative feelings and impulses are a part of you and they affect you emotionally and physically whether or not you acknowledge them. Furthermore, your negative emotions are often expressed inadvertently and get in the way of the peace and harmony you want in your relationships. It is best to get things out in the open first, at least by allowing yourself to become aware of your feelings.`;
    }

    newAnalysisContainer.innerHTML = `
      <h3>Analysis</h3>
      <p><strong>Motivation: </strong>${motivation}</p>
      <p>${additionalInfo}</p>
      <p><strong>Recommendations: </strong>${recommendations}</p>
      <p><em>The above information is provided for fun and is not guaranteed to be accurate.</em></p>
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
      <p>Similarity Score: <strong>${userResult.secondarySimilarityScore.toFixed(3)}</strong></p>
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
      const average = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(3); // Truncate to 3 decimal places
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

// We see that you've found out how the result is actually calculated. Don't spoil it for others!
function calculateResult() {
  const archetypeScores = {
    "Mrs. Graves": { e: 2.5, es: 2.5, a: 4 , o: 2.5, c: 7, x: 3, },
    "Ashley Graves": { e: 5.5, es: 4, a: 5.5 , o: 4, c: 4, x: 4.5, },
    "The Lady": { e: 5.5, es: 4, a: 4 , o: 4, c: 4, x: 5, },
    "Nina": { e: 4, es: 2.5, a: 4 , o: 5.5, c: 4, x: 2.5, },
    "Andrew Graves": { e: 1, es: 4, a: 1 , o: 5.5, c: 4, x: 4, },
    "Cult Leader": { e: 4, es: 2.5, a: 4 , o: 1, c: 4, x: 5.5, },
    "Julia": { e: 7, es: 5.5, a: 4 , o: 5.5, c: 2.5, x: 3.5, },
    "??? (Entity)": { e: 7, es: 7, a: 2.5 , o: 5.5, c: 5.5, x: 6, },
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