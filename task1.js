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