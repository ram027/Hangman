const categories = ["Programing Languages", "Cricketers", "Countries"];
const wordsCorrespondeToCategories = [
  ["javascript", "java", "ruby", "kotlin"],
  ["virat", "msdhoni", "sachin", "hardik"],
  ["india", "japan", "russia", "dubai"],
];
let liveCount = 2;
let winCount = 0;
const selectedCategory = document.getElementById("selected-category");
const selectedWordContainer = document.querySelector(
  ".selected-word-container"
);
const livesElement = document.getElementById("lives");
const hangmanImg = document.getElementById("hangman-img");
const resultMsg = document.getElementById("result-msg");
const selectedCategoryIndex = Math.floor(Math.random() * 3);
selectedCategory.innerText = categories[selectedCategoryIndex];

let selectedWord =
  wordsCorrespondeToCategories[selectedCategoryIndex][
    Math.floor(Math.random() * 4)
  ];
let i = 0;
while (i < selectedWord.length) {
  const customDiv = document.createElement("div");
  customDiv.classList.add("custom-div-style");
  customDiv.setAttribute("id", `l${i}`);
  selectedWordContainer.appendChild(customDiv);
  i++;
}
console.log(selectedWord);

const handleWinOrFail = (isWin) => isWin?"You win":"You lost";

const handleKey = (key) => {
  if (liveCount !== 8 && winCount !== selectedWord.length) {
    if (!selectedWord.includes(key)) {
      const lives = Number(livesElement.innerText);
      livesElement.innerText = lives - 1;
      hangmanImg.setAttribute("src", `./Images/${liveCount}.jpg`);
      liveCount++;
    } else {
      winCount++;
      const index = selectedWord.indexOf(key);
      selectedWord = selectedWord.replace(selectedWord[index], "1");
      const letterDiv = document.getElementById(`l${index}`);
      if (letterDiv.innerText === "") {
        letterDiv.innerText = key;
      }
      if (winCount === selectedWord.length) {
        resultMsg.innerText=handleWinOrFail(true);
      }
    }
  }
  if (liveCount === 8) {
    resultMsg.innerText=handleWinOrFail(false);
  }
};

const handleRestart = () => {
    window.location.reload('');
}