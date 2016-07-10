//Exercise 1
//Write a function called printPositives that takes an array and 
//uses the forEach method to print only the positive numbers.

var listOfNumbers = [1, -2, 48, -9, 2, -7, 8, -3, 9];

function printPositives(num) {
    if (num > 0) {
        console.log(num);
    }
    return [];
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

function filterThanPrint(arr) {
    return arr.filter(getPositives).forEach(printPositives);
}


//console.log(filterThanPrint(listOfNumbers));

/*
Exercise 3
Write a function called filterArray that takes an array AND a function as arguments. 
Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
NOTE: You are allowed to use Array.prototype.filter to answer this question.
NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
*/

listOfNumbers = ["dennis", NaN, 4, -9, 2, , "", -7, 4, -3, 9, ""]

function filterArray(arr, funct) {
    return arr.filter(funct);
}

function tru(value) {
    return value;
}

//console.log(filterArray(listOfNumbers, tru));

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

var phrase = "this is a stringgggg";

function countCharObj(Obj, letter) {
    if (Obj[letter]) {
        Obj[letter] += 1;
    }
    else {
        Obj[letter] = 1;
    }
    return Obj;
}

function letterOrNot (letter) {
    return !(letter === " ");
}

function countChars(str) {
    var lettersArray = str.split("");
    lettersArray = lettersArray.filter(letterOrNot);
    return lettersArray.reduce(countCharObj, {});
}

//console.log(countChars(phrase));

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

function ObjPropByID(obj, prop) {
    obj[prop.id] = prop;
    return obj;
}

function peopleId(arr) {
    return arr.reduce(ObjPropByID,{});
}

//console.log(peopleId(personaldata));

//Exercise 10
// Output array
/*{
  "John": [
    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    }
  ],
  "Donald": [
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    }
  ]
}
*/

function ObjPropbyFirstName(obj, arrayElement) {
    var sameFirstName = [];
    var currentFirstName = arrayElement.firstName;
    
 if (!obj.hasOwnProperty(currentFirstName)) {
     sameFirstName.push(arrayElement);
     obj[currentFirstName] = sameFirstName;
 } else {
     obj[currentFirstName].push(arrayElement);
}
    return obj;
}

function peopleByFirstName(arr) {
    return arr.reduce(ObjPropbyFirstName,{});
}

console.log(peopleByFirstName(personaldata));
