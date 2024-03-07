const resultInput = document.getElementById('result');

// Function to display the clicked button value
function display(value) {
  resultInput.value += value;
}

// Function to clear the screen
function ClearScreen() {
  resultInput.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    resultInput.value = 'Error';
  }
}