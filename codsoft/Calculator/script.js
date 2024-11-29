// Function to append characters to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value; // Add the clicked button's value to the display
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = ''; // Clear the display
}

// Function to evaluate the expression
function calculate() {
  const display = document.getElementById('display');
  try {
    // Use eval to calculate the result, only if the input is valid
    display.value = eval(display.value); 
  } catch (error) {
    display.value = 'Error'; // Display "Error" for invalid expressions
  }
}
