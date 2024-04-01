/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array.forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

function myForEach(array, cb) {
    // Your code here 
     // Define a function named myForEach that takes an array and a callback as arguments
     for (let i = 0; i < array.length; i++) {
        //Iterate through each element of the array using a for loop
        callback(array[i], i, array);
        // Call the callback function on each element of the array, passing in the element itself, the index, and the entire array as arguments
    }
}

// Test cases
myForEach(['a', 'b', 'c'], function (el, i) {
    // Call myForEach with an array and a callback function
    console.log(el + ' is at index ' + i);
    // Log each element of the array along with its index
});

let test = [];
myForEach(['laika', 'belka'], function (el) {
    // Call myForEach with another array and a different callback function
    test.push(el.toUpperCase());
    // Convert each element of the array to uppercase and push it into a new array
});

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myForEach;
} catch(e) {
    return null;
}
