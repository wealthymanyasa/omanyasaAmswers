//instructions to execute the file
// Step 1: install node.js on your system

// Step 2: open the folder with the task.js file in command prompt.

// Step 3:  Locate your path where the .js file is saved.

// Step 4: To compile the .js file we have to write

//Node <Filename>.js

// Step 5: Press the Enter key.
function generateRingCombinations() {
  const rings = ['agate', 'diamond', 'gold', 'citrine'];
  const maxCombinations = 365; // Number of days in a year
  const combinations = [];

  // Helper function to check if a combination is valid
  function isValidCombination(combination) {
    return (
      combination.includes('right_ring') &&
      combination.length <= 3 &&
      !combination.some((finger, index, self) => self.indexOf(finger) !== index)
    );
  }

  // Recursive function to generate combinations
  function generateCombinations(remainingRings, currentCombination) {
    if (isValidCombination(currentCombination)) {
      combinations.push(currentCombination.slice());
    }
    if (combinations.length >= maxCombinations) {
      return;
    }

    for (let i = 0; i < remainingRings.length; i++) {
      const newCombination = currentCombination.slice();
      newCombination.push(remainingRings[i]);
      const remainingRingsCopy = remainingRings.slice();
      remainingRingsCopy.splice(i, 1);

      generateCombinations(remainingRingsCopy, newCombination);
    }
  }

  generateCombinations(rings, []);

  return combinations;
}

const ringCombinations = generateRingCombinations();

console.log(`Number of possible ring combinations: ${ringCombinations.length}`);
console.log(ringCombinations);
