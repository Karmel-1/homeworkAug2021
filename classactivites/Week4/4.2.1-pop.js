const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

let popReturn = nums.pop();
let popReturn1 = nums.pop();
console.log(nums, "pop method");

// remove each of the first two items with shift(), saving each item to a variable

let shiftReturn = nums.shift();
let shiftReturn1 = nums.shift();
console.log(nums, "shift method");

// use push and unshift to add the variables back to the array in numerical order, 0-6f

let unshiftReturn = nums.unshift(popReturn1);
let unshiftReturn1 = nums.unshift(popReturn);

let pushReturn = nums.push(shiftReturn1);
let pushReturn1 = nums.push(shiftReturn);

console.log(nums, "push and unshift");
const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("this is the first index of a ", arr.indexOf("a"));
console.log("this is the first index of b ", arr.indexOf("b"));
console.log("this is the first index of c ", arr.indexOf("c"));


// find the last index of "a", "b", and "c"
console.log("This is the last index of a", arr.lastIndexOf("a"));
console.log("This is the last index of b", arr.lastIndexOf("b"));
console.log("This is the last index of c", arr.lastIndexOf("c"));


// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex){
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
    
  }
  return array
}
console.log(arr)
removeDuplicates(arr, "a");
console.log("After removing A's", arr);
removeDuplicates(arr, "b");
console.log("after removing B's", arr);
removeDuplicates(arr, "c");
console.log("after removing C's", arr);
const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const newArray = arrOne.concat(arrTwo, 4, "e", arrOne[0]);

// print the new, merged array
console.log(newArray);

// join the merged array and print the result
console.log(newArray.join("+"));

// create an array of latitude and longitude coordinate pairs
//------------------------------

const coords = [];

data.forEach(curr => {
  let lat = curr.address.geo.lat;
  let lng = curr.address.geo.lng;
  coords.push([lat, lng]);
});