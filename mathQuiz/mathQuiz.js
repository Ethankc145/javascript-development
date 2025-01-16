const prompt = require('prompt-sync')({ sigint: true });

const questions = [
  { question: "What formula is this: y=mx+b?", 
    choices: ["quadratic", "slope intercept", "circle formula"], 
    answer: "slope intercept" 
  },
  { question: "What's the Pythagorean theorem?", 
    choices: ["a^2 + b^2 = c^2", "a + b = c", "a^3 + b^3 = c^3"], 
    answer: "a^2 + b^2 = c^2" 
  },
  { question: "Solve X: 5x - 7 = 32", 
    choices: ["1", "8", "4"], 
    answer: "8" 
  },
  { question: "365 days is equal to 1 year. How many days does it take for 11 years?", 
    choices: ["4015", "3000", "5000"], 
    answer: "4015" 
  },
  { question: "What's the square root of 256?", 
    choices: ["14", "16", "18"], 
    answer: "16" 
  }
];

let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

questions.forEach((item, index) => {
  shuffleArray(item.choices);

  const letterChoices = item.choices.map((choice, i) => `${String.fromCharCode(97 + i)}. ${choice}`);

  console.log(`${index + 1}. ${item.question}`);
  console.log(letterChoices.join("\n"));

  let userAnswer;
  while (true) {
    userAnswer = prompt("Enter the letter of your answer (a, b, c): ").trim().toLowerCase();
    if (["a", "b", "c"].includes(userAnswer)) {
      break;
    } else {
      console.log("Invalid input. Please type only 'a', 'b', or 'c'.");
    }
  }

  const correctLetter = String.fromCharCode(97 + item.choices.indexOf(item.answer));

  if (userAnswer === correctLetter) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(`Wrong! The correct answer is hidden\n`);
  }
});

console.log(`You got ${score} out of ${questions.length} correct.`);
