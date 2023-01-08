function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    console.log(`seenNumbers = ${seenNumbers}`);
    console.log(`i = ${i}`)
    console.log(`complement = ${target - array[i]}`);
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
    console.log(`seenNumbers assignment = ${seenNumbers}`);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create an object to save numbers we've already seen
  iterate through each number in an array
  for the current number, identify a complement that adds to the target (comp = target - num)
  check if any key on our object is the complement

  if so return true
  otherwise add that number to the object
  if I reach the end of the array return falsse
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
