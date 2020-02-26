/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let finalStr = "1";

  if (n === 1) {
    return finalStr;
  }

  let charPointer = 0;
  let countPointer = 0;
  let strInProgress = "";

  while (n > 1) {
    while (countPointer < finalStr.length) {
      while (finalStr.charAt(charPointer) === finalStr.charAt(countPointer)) {
        countPointer++;
      }

      strInProgress += (countPointer - charPointer).toString();
      strInProgress += finalStr.charAt(charPointer);
      charPointer = countPointer;
    }

    finalStr = strInProgress;
    strInProgress = "";
    charPointer = 0;
    countPointer = 0;
    n--;
  }
  return finalStr;
};
console.log(countAndSay(8));
