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
    // YOUR CODE HERE // returns boolean
        if (num <= 1) return false; // negatives
        if (num % 2 == 0 && num > 2) return false; // even numbers
        const s = Math.sqrt(num); // store the square to loop faster
        for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
            if(num % i === 0) return false; // modulo shows a divisor was found
        }
        return true; //<--- Does this count as an "else" without it needing to be spcifically indicated?
      }
     //Found this on Stack Overflow by Tomachi. I mostly get it, but I can't quite get my head around how the 'for' loop works here or why it's necessary. 
console.log(checkPrime(2));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (i = 0; i <= num; i++) {
        if (checkPrime(i) == true) {
            console.log(i);
        }
    }
}
printPrimes(36);

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let longestWordLength = 0;
    let longestWord = null;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWord = arr[i];
            longestWordLength = arr[i].length;
        }
    }
    return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));



// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
    let x = 0
    let fibArray = [0, 1];
    let fibArrayEvens = [];
    while (x <= num) {
        x = fibArray[0] + fibArray[1];
        fibArray = [fibArray[1], x];
        // if (x < num) {
        //     console.log(x);
        // }
        if (x < num && x % 2 === 0) {
            fibArrayEvens.push(x);
        }
    }

       //console.log(fibArrayEvens);
    let evenSum = function() {
        let total = 0;
        for (i = 0; i < fibArrayEvens.length; i++) {
            total += fibArrayEvens[i];
        }
        return(total);
    }
console.log(evenSum());
}

eulerFibo(4000000);

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
    let foundNeedle = arr.indexOf('needle');
    console.log(`Found needle at position ${foundNeedle}!`);
    
}


let haystack = ['boots', 'belts', 'buckles', 'belfreys', 'spoons', 'needle', 'mice', 'vagrants', 'oneSinglePoodle', 'potions'];

findNeedle(haystack);

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