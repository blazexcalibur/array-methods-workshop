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

var listOfPositiveNumbers = filterArray(listOfNumbers, tru);
console.log(listOfPositiveNumbers);

//Exercise 4
//Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
//You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split to split the string into an array of words.

