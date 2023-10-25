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
