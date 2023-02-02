// 1.1. What is the difference between a parameter and an argument?
    //A parameter acts as a placeholder for arguments to be passed when the function is called
// 1.2. Within a function, what is the difference between return and console.log?
    //Console.log sends text to the console. Return provides a value that can be used at other points in the code. i.e. "let randVariable = randFunction(arg1, arg2);" sets randVariable to the value returned when calling randFunction.

// 1. 3. What are the implications of the ability of a function to return a value?
    //By having a function return a value, it can be used to define variables, manipulate given values, and allow repeated calculations to be peformed as many times as necessary, while only writing out the calculation once.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return(Math.pow(num, 3));
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    return(letter == "a"||letter == "e"||letter == "i"||letter == "o"||letter == "u");
    }
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let array = []
    array.push(word1.length, word2.length);
    return(array);
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let array = arr
    let sum = 0;
    for (i = 0; i < array.length; i++){
        sum = array[i] + sum;
    }
    return(sum);
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    return(num % 2 !== 0);

}
console.log(checkPrime(6));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};