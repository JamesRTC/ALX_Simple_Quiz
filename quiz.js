const feedback = document.getElementById("feedback");
const submitAnswer = document.getElementById("submit-answer");
// Function Declaration
function checkAnswer() {
  // Identify the Correct Answer
  const correctAnswer = "4";

  // Retrieve the User’s Answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer = "";

  // Ensure selectedOption is not null (no answer selected)
  if (selectedOption) {
    userAnswer = selectedOption.value;
  }

  // Compare the User’s Answer with the Correct Answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else if (userAnswer) {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
  }
}

// Add an Event Listener to the Submit Button
submitAnswer.addEventListener("click", checkAnswer);
