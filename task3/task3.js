///install “prompt-sync“. make sure you have also installed an updated version of npm and node
function isHarshadNumber(n) {
    // Convert the number to a string to work with its digits
    const digits = n.toString().split('').map(Number);
    const sumOfDigits = digits.reduce((sum, digit) => sum + digit, 0);
  
    return n % sumOfDigits === 0;
  }
  const prompt=require("prompt-sync")({sigint:true}); 
  const userInput = prompt("Enter an integer:"); //getting user input
  const number = parseInt(userInput);
  
  if (!isNaN(number)) {
    const result = isHarshadNumber(number);
    if (result) {
      console.log(`The number ${number} is a Harshad number.`);
    } else {
      console.log(`The number ${number} is not a Harshad number.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid integer.");
  }