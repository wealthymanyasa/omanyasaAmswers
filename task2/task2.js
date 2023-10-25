//instructions to execute the file
// Step 1: install node.js on your system

// Step 2: open the folder with the task.js file in command prompt.

// Step 3: type npm install to install package dependencies

// Step 4:  Locate your path where the .js file is saved.

// Step 5: To compile the .js file we have to write

//Node <Filename>.js

// Step 6: Press the Enter key.
///install “prompt-sync“. make sure you have also installed an updated version of npm and node.js
function getDivisorsSum(n) {
    let sum = 1; // Start with 1 as a divisor for all numbers
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i === n / i) {
          sum += i;
        } else {
          sum += i + n / i;
        }
      }
    }
    return sum;
  }
  
  function classifyNumber(n) {
    if (n <= 0) {
      return "Please enter a positive integer.";
    }
  
    const sumOfDivisors = getDivisorsSum(n);
    if (sumOfDivisors < n) {
      return "Deficient Number";
    } else if (sumOfDivisors === n) {
      return "Perfect Number";
    } else {
      return "Abundant Number";
    }
  }
  const prompt=require("prompt-sync")({sigint:true}); 
  const userInput = prompt("Enter an integer:"); //get user input
  const number = parseInt(userInput);
  
  if (!isNaN(number)) {
    const result = classifyNumber(number);
    console.log(`The number ${number} is a ${result}.`);
  } else {
    console.log("Invalid input. Please enter a valid integer.");
  }