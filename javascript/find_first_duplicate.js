// create a function that finds the first duplicate of a given arrayu
// the function should initialize an empty set
// it should iterate over the array and add unique values to the set
// if the value is not unique then return the value
// if the function reaches the last index before a duplicate is found
// return null

function findFirstDuplicate(arr) {
  let set = new Set()
  for (let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){
      return arr[i]
    }
    set.add(arr[i])
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log('')

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([ "i", "*", "0", 0 ]))

  console.log('')

  console.log("Expecting: * ");
  console.log("=>", findFirstDuplicate(["*", 0, "n", "@", "*"]))

}

module.exports = {findFirstDuplicate};

// Please add your pseudocode to this file
// And a written explanation of your solution


// Using a Set is the preferred method here because it contains only unique objects/values
// By mathematically steping through each value in the array
// We compare that value to the Set initialized as an empty 
// If the value is in the set already.. meaning the program encountered an element,
// compared it to the set, found it to be unique and added it
// on the subsiquent loops we found a value that is already in the set
// meaning it is the 2nd time the program encountered this value
// hense being the first duplicate