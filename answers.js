//Exercise 1
//Write a function called printPositives that takes an array and 
//uses the forEach method to print only the positive numbers.

var listOfNumbers = [1, -2, 48, -9, 2, -7, 8, -3, 9];

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

//listOfNumbers = ["dennis", NaN, 4, -9, 2, -7, 4, -3, 9]

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
}, 0);

//console.log(vowels);

/*
Exercise 6
Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, 
and a property lowest containing the lowest number, using Array.prototype.reduce.
For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
Hint: Javascript has a special value called Infinity, which is higher than any other number. 
See if you can initialize your reduce accumulator with Infinity and -Infinity :)
*/


var highest = listOfNumbers.reduce(function highLow(highLowCount, num) {

    if (num > highLowCount.high) {
        highLowCount.high = num;
    }

    if (num < highLowCount.low) {
        highLowCount.low = num;
    }
    return highLowCount;
}, {
    high: -Infinity,
    low: Infinity
});

//console.log(highest);


//console.log(phrase.split(""));
/*
Exercise 7
Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, 
and returns the higest, second highest, lowest, and second lowest numbers.
For example, starting with [1, -10, 20, 40, 5], your function should return:
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
*/

listOfNumbers = [1, -10, 20, 40, 5];

var extrema = listOfNumbers.reduce(function highLowTwo(highLowCount, num) {

    if (num > highLowCount.highest) {
        highLowCount.secondhighest = highLowCount.highest;
        highLowCount.highest = num;
    }
    if (num < highLowCount.highest && num > highLowCount.secondhighest) {
        highLowCount.secondhighest = num;
    }
    if (num < highLowCount.lowest) {
        highLowCount.secondlowest = highLowCount.lowest;
        highLowCount.lowest = num;
    }
    if (num < highLowCount.secondlowest && num > highLowCount.lowest) {
        highLowCount.secondlowest = num;
    }
    return highLowCount;
}, {
    highest: -Infinity,
    secondhighest: -Infinity,
    lowest: Infinity,
    secondlowest: Infinity
});

//console.log(extrema);

/*
Exercise 8
Write a function called countChars that takes a string, and returns an object where the keys are letters, 
and the value is the number of times that letter appears.
For example, with input "hello world", the output should be:
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
NOTE: Unlike arrays, objects don't have any ordering on them. When you print your object on the console, 
your keys may be displayed in a different order, and it does not matter.
*/

function countChar(str) {
    var phraseArray = phrase.split("");

    return phraseArray.reduce(function(countC, letter) {

        if (countC[letter]) {
        countC[letter] += 1;
        }
        else {
        countC[letter] = 1;
        }
        return countC;
    }, {});
}

console.log(countChar(phrase));

//Exercise 9

var personaldata = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]

function peopleId(arr) {
    var browse = arr.reduce(function(person, personkey){
        person[personkey.id] = personkey;
        return person;
    }, {});
    return browse;
}

//console.log(peopleId(personaldata));

//Exercise 10

function peopleId(arr) {
    var contact = arr.reduce( function(person, personobj){
        if (!person[personobj.firstName]) {
            person[personobj.firstName] = [];
            person[personobj.firstName].push(personobj)
        } else {
            person[personobj.firstName]push(personobj)
        }
        return person;
    },{});
}

console.log(peopleId(personaldata));
