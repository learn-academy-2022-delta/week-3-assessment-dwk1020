// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// 1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


//  describe("fib"), () => {
//      it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence."), () => {
//          expect(fib("fibLength1").toEqual([1, 1, 2, 3, 5, 8]))
//      }
//  }


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// -->Psuedocode
// Create two sets of variables called fib and fib1.
// Both variables will use a for loop that takes in the length of the index and out puts numbers from the Fibonacci sequence based on the length of the array provided on the const, either 6 or 10.


  var fib = [1, 1];
  for(var i=fib.length; i<6; i++) {
      fib[i] = fib[i-2] + fib[i-1];
  }
 var fib1 = [1, 1];
 for(var i=fib1.length; i<10; i++) {
     fib1[i] = fib1[i-2] + fib1[i-1];
 }
 console.log(fib, fib1); 
//--->returned 
//  [ 1, 1, 2, 3, 5, 8 ] [
//   1,  1,  2,  3,  5,
//   8, 13, 21, 34, 55
// ]


// 2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.


//  describe("newArray", () => {
//      it("takes in an array and returns a new array of only odd numbers sorted from least to greatest."),
//        () => {
//          expect(newArray("fullArray").toEqual([-9, 7, 9, 199]))
//      }
//  })

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// -->Psuedocode
// Create a function called newArray that takes an array and filters out the odd numbers using .filter, then sorts the odd numbers using .sort.  Return the sorted odd numbers using .map to ensure they are in order of value 


function newArray(array) {
    const odd = fullArr1.filter((x) => x % 2).sort((a,b) => a - b);
    return fullArr1.map((x) => x % 2 ? odd.shift() : x);
 }
  console.log(newArray([fullArr1]))
// ----->returned 
// [
//   4,     -9,    0,
//   true,  8,     '7',
//   'hey', 7,     9,
//   199,   false, 'hola'
// ]


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// describe("array1", () => {
//   it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array."),
//     () => {
//       expect(array1("numbersToAdd1").toEqual([2, 6, 51, 60]))
//   }
// })

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

// -->Psuedocode
// Use let for three new arrays (array1, array2, and array3)
// Tie each new array to the corresponding const and result.
// Creat a for loop for each array with a starting index , array length using .length, and iterate over +1  

// console log each result together or seperate



 let array1 = numbersToAdd1, result1 = [];
 let array2 = numbersToAdd2, result2 = [];
 let array3 = numbersToAdd3, result3 = [];

 for (let i = 0, s = array1[0]; i < array1.length; i++, s += array1[i]) result1.push(s);
 for (let i = 0, s = array2[0]; i < array2.length; i++, s += array2[i]) result2.push(s);
 for (let i = 0, s = array3[0]; i < array3.length; i++, s += array3[i]) result3.push(s);

 console.log(result2, result1, result3);
//  --->returned [ 0, 7, -1, 11 ] [ 2, 6, 51, 60 ] []
