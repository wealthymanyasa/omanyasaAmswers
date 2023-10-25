//instructions to execute the file
// Step 1: install node.js on your system

// Step 2: open the folder with the task.js file in command prompt.

// Step 3:  Locate your path where the .js file is saved.

// Step 4: To compile the .js file we have to write

//Node <Filename>.js

// Step 5: Press the Enter key.
function findFactorPairs(target) {
    const factorPairs = [];
  
    for (let factor1 = 1; factor1 <= Math.sqrt(target); factor1++) {
      if (target % factor1 === 0) {
        const factor2 = target / factor1;
        if (factor1 <= factor2) {
          factorPairs.push([factor1, factor2]);
        }
      }
    }
  
    return factorPairs;
  }
  
  function generateFactorPairsList(target) {
    const factorPairs = findFactorPairs(target);
    const sortedFactorPairs = factorPairs.sort((a, b) => a[0] - b[0]);
  
    return sortedFactorPairs;
  }
  
  const targetNumber = 900900;
  const factorPairsList = generateFactorPairsList(targetNumber);
  
  factorPairsList.forEach((pair) => {
    console.log(`${pair[0]} * ${pair[1]} = ${targetNumber}`);
  });