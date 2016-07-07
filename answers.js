//Exercise 1
//Write a function called printPositives that takes an array and 
//uses the forEach method to print only the positive numbers.

var listOfNumbers = [1, -2, 4, -9, 2, -7, 4, -3, 9];

function printPositives(num) {
    if (num > 0) {
        console.log(num);
    }
}

//var listOfPositiveNumbers = listOfNumbers.forEach(printPositives);
//console.log(listOfPositiveNumbers);

//Exercise 2
//Similar to the previous exercise, write a function called getPositives that takes an array
//and uses the filter method to return a new array with only the positive numbers.

function getPositives(num) {
    if (num > 0) {
        return num;
    }
}

//var listOfPositiveNumbers = listOfNumbers.filter(getPositives);
//console.log(listOfPositiveNumbers);

//Exercise 2B
//Re-do exercise 1 by first filtering the input array,
//and then printing the numbers from the filtered array. Your code will look something like: `return arr.filter(...).forEach(...)

function printPositivesTheLongWay(arr) {
    return arr.filter(getPositives).forEach(printPositives);
}

//printPositivesTheLongWay(listOfNumbers);

/*
Exercise 3
Write a function called filterArray that takes an array AND a function as arguments. 
Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
NOTE: You are allowed to use Array.prototype.filter to answer this question.
NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
*/

listOfNumbers = ["dennis", NaN, 4, -9, 2, -7, 4, -3, 9]

function filterArray(arr, funct) {
    return arr.filter(funct);
}

function tru(value) {
    if (value) {
        return value;
    }
}

//var listOfPositiveNumbers = filterArray(listOfNumbers, tru);
//console.log(listOfPositiveNumbers);

//Exercise 4
//Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
//You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split to split the string into an array of words.

var phrase = "which one of these words isssssss the longest?";
var words = phrase.split(" ");
var longestWord = words.reduce(function longestWord(firstWord, secondWord) {
    if (firstWord.length < secondWord.length) {
        return secondWord;
    }
    return firstWord;
}, "");

//console.log(longestWord);

/*
Exercise 5
Write a function called countVowels that takes a string and returns the number of vowels in the string. 
You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.
*/


var phraseArray = phrase.split("");

var vowels = phraseArray.reduce(function countVowels(totalV, letter) {
            var listOfVowels = ["a", "e", "i", "o", "u"];

            if (listOfVowels.indexOf(letter) > -1) {
                return totalV + 1;
            }
            return totalV;
        /*
        if (letter === "a"||letter === "e"||letter === "i"||letter === "o"||letter === "u"){
            return totalV += 1 ;
        } 
        return totalV;
        */
    },0);

//console.log(vowels);

/*
Exercise 6
Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, 
and a property lowest containing the lowest number, using Array.prototype.reduce.
For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
Hint: Javascript has a special value called Infinity, which is higher than any other number. 
See if you can initialize your reduce accumulator with Infinity and -Infinity :)
*/


var highest = listOfNumbers.reduce(function countVowels(highLowCount, num ) {
    
    if (num > highLowCount.high) {
        highLowCount.high = num;
    }
    
    if (num < highLowCount.low) {
        highLowCount.low = num;
    }
    return highLowCount;
}, {high: -Infinity, low: Infinity});

console.log(highest);


//console.log(phrase.split(""));

