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