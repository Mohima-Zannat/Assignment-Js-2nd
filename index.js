// Question no-1
function calculateDifference(a, b) {
    return a - b;
}

console.log(calculateDifference(10, 4)); 
console.log(calculateDifference(5, 12)); 

// Question no-2
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3)); 
console.log(isOdd(4)); 
console.log(isOdd(-5)); 
console.log(isOdd(0)); 

// Question no-3

function findMin(arr) {
    if (arr.length===0) {
        throw new Error("Arrow can not be error");
}
return Math.min (...arr);
}
console.log(findMin([7,3,2,10]))
console.log(findMin ([4,10,3,4]));

// Question no-4
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
    
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([14, 15, 24, 27]));  
console.log(filterEvenNumbers([1, 3, 5]));         
console.log(filterEvenNumbers([])); 


//Question no-5
function sortArrayDescending (numbers) {
    return numbers.slice().sort( (a,b) => (b-a));

}
const inputArray= [1,5,9,7,2];
const sortedArray= sortArrayDescending (inputArray);

console.log(sortedArray);


// Question no-6
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}


const inputString = "Hello";
const result = lowercaseFirstLetter(inputString);

console.log(result); 

// Question no-7
function findAverage(numbers) {
    if (!numbers.length) 
    return 0; 
    const total = numbers.reduce((sum, num) => sum + num, 0); 
    return total / numbers.length; 
}


const numbersArray = [5, 10, 15, 20];
const average = findAverage(numbersArray);

console.log(average);


// Question no-8
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023)); 
        


