/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var res = "";
  var i = a.length - 1,
    j = b.length - 1,
    carry = 0;

  while (i >= 0 || j >= 0) {
    var sum = carry;

    if (a.charAt(i)) {
      sum += Number(a.charAt(i));
      i--;
    }
    if (b.charAt(j)) {
      sum += Number(b.charAt(j));
      j--;
    }

    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
  }

  if (carry > 0) {
    res = carry + res;
  }

  return res;
};

console.log(addBinary("101", "110"));
