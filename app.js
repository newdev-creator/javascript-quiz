const responses = ["c", "a", "b", "a", "c"];
const emojis = ["😎", "🧐", "🙂", "🤔", "😢"];

const form = document.querySelector(".form");
const showResultElement = document.querySelector(".show-result");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const results = getSelectedAnswers();
  const filter = filterAnswer(results);
  const isEqual = compareAnswers(results);

  showResult(isEqual);
  addColors(filter);
}

function getSelectedAnswers() {
  const inputRadios = document.querySelectorAll(
    ".form input[type=radio]:checked"
  );
  return Array.from(inputRadios).map((inputRadio) => inputRadio.value);
}

function compareAnswers(userAnswers) {
  return userAnswers.reduce((acc, answer, index) => {
    return acc + (answer === responses[index] ? 1 : 0);
  }, 0);
}

function showResult(correctCount) {
  const resultHTML =
    correctCount > 0
      ? `<p>Nombre de réponses correctes : ${correctCount}</p>`
      : "<p>Aucune réponse correcte</p>";
  showResultElement.innerHTML = resultHTML;
}

function filterAnswer(userAnswers) {
  const equalArray = [];

  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === userAnswers[i]) {
      equalArray.push(true);
    } else {
      equalArray.push(false);
    }
  }
  return equalArray;
}

function addColors(userAnswersFilter) {
  const fieldset = document.querySelectorAll(".form__question");

  userAnswersFilter.forEach((response, index) => {
    if (userAnswersFilter[index]) {
      fieldset[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      fieldset[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}
