function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const strNormalized = str.toLowerCase();
  console.log(strNormalized);

  const spamIncludes =
    strNormalized.includes("spam") || strNormalized.includes("sale");
  return spamIncludes;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
