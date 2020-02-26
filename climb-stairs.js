/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let countingFunc = function(stairsRemaining, savedResults) {
    if (stairsRemaining < 0) return 0;
    if (stairsRemaining === 0) return 1;
    if (savedResults[stairsRemaining]) return savedResults[stairsRemaining];

    savedResults[stairsRemaining] =
      countingFunc(stairsRemaining - 1, savedResults) +
      countingFunc(stairsRemaining - 2, savedResults);

    return savedResults[stairsRemaining];
  };

  return countingFunc(n, {});
};

console.log(climbStairs(5));
