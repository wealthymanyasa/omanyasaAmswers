//instructions to execute the file
// Step 1: install node.js on your system

// Step 2: open the folder with the task.js file in command prompt.

// Step 3: type npm install to install package dependencies

// Step 4:  Locate your path where the .js file is saved.

// Step 5: To compile the .js file we have to write

//Node <Filename>.js

// Step 6: Press the Enter key.
const prompt=require("prompt-sync")({sigint:true}); 

function calculateDilutionAmount(currentAmount, currentDilution, recommendedDilution) {
    if (currentDilution <= 0 || recommendedDilution <= 0) {
      return "Dilution percentages must be greater than 0.";
    }
  
    const sirupAmount = (currentAmount * (currentDilution / 100));
    const sirupToReplace = ((sirupAmount - (recommendedDilution / 100) * currentAmount) / ((recommendedDilution / 100) - (currentDilution / 100)));
  
    if (sirupToReplace >= 0) {
      const waterToReplace = currentAmount - sirupToReplace;
      return `Replace ${sirupToReplace.toFixed(2)} ml of your syrup with water.`;
    } else {
      return "Your current dilution is already stronger than the recommended dilution.";
    }
  }
  
  const currentAmount = parseFloat(prompt("Enter the amount of syrup in your glass (in ml):"));
  const currentDilution = parseFloat(prompt("Enter the current dilution percentage (e.g., 25% as 25):"));
  const recommendedDilution = parseFloat(prompt("Enter the recommended dilution percentage (e.g., 20% as 20):"));
  
  if (!isNaN(currentAmount) && !isNaN(currentDilution) && !isNaN(recommendedDilution)) {
    const result = calculateDilutionAmount(currentAmount, currentDilution, recommendedDilution);
    console.log(result);
  } else {
    console.log("Invalid input. Please enter valid numeric values.");
  }
  