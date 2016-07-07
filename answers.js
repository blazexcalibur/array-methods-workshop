//Exercise 1
//Write a function called printPositives that takes an array and 
//uses the forEach method to print only the positive numbers.

var listOfNumbers = [1,-2,4,-9,2,-7,4,-3,9];

function printPositives(num) {
    if (num >0){
        console.log(num);
    }
}
    
listOfNumbers.forEach(printPositives);

//Exercise 2
//Similar to the previous exercise, write a function called getPositives that takes an array
//and uses the filter method to return a new array with only the positive numbers.

function getPositives(num) {
    if (num >0){
        return num;
    }
}

var listOfPositiveNumbers = listOfNumbers.filter(getPositives);
//console.log(listOfPositiveNumbers);