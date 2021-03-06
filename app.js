
function greeting(name, callback){
    let sentence = 'Hello, my name is ' + name + ' ';
    
    let otherSentence = callback(); // call a function within a function

    return sentence + otherSentence;
}


function anotherGreeting(){
    let sentence = 'I forgot my last name';
    
    return sentence;
}

let myName = 'Barent';
console.log(greeting(myName, anotherGreeting));



// exercise 1
function printArray(array, callback){
    for (let i = 0; i < array.length; i++){
        let number = array[i]; 

        console.log(number) 
    }

    callback(array);
}

function printArrayAgain(array){
    for (let i = 0; i < array.length; i++){
        let number = array[i];

        console.log(number);

    }
}

const numbersArray = [1,2,3,4,5,9,8,7,6];

// printArray(numbersArray, printArrayAgain);


// exercise 2

function calculator(num1, num2, callback1, callback2){
    let result = callback1(num1, num2) + callback2(num1, num2);
    // callback 1 =  82 , callback 2 = -72 == (82 + -72)
    return result
}

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

function subtractNumbers(num1, num2){
    let result = num1 - num2;
    return result;
}

console.log(calculator(5, 77, addNumbers, subtractNumbers));

// exercise 3 superhero function
// take in two callbacks 
// return a string in each callback describing the superpower

function superHero(callback1, callback2){
    let result = 'My superpowers are ' + callback1() + ' and ' + callback2();
    return result;
}

function superPower1(){
    let superPower = 'lazer eyes';
    return superPower;
}

function superPower2(){
    let superPower = 'emotional maturity';
    return superPower;
}

console.log(superHero(superPower1, superPower2));


// setTimeout
function blastOff(){
    let num = 0;

    for (let i = 10; i >= num; i--){
        console.log(i); // 10, 9, 8, 7 ...
    }
    console.log('BLASTOFF!');
}

// setTimeout(blastOff, 5000);

// exercise 4 
// make function that prints your name
// setTimeout and pass in that function and time 5 seconds

function printName(){
    let name = 'Barent';

    for (let i = 0; i < name.length; i++){
        console.log(name[i]);
    }
    console.log('Thats me!');
}

// setTimeout(printName, 5000);


// rome anon func variation
// function printName(name){
//     console.log(name);
// }

// let myNameTwo = 'Rome';
// setTimeout(function(){ //anonymous function! 
//     printName(myNameTwo);
// });

// ITERATORS
// iterators in js are built in array functions

// forEach is an array method!

const collectables = ['Bomag', 'CMI Corp', 'Wirtgen', 'Catepiller'];

collectables.forEach(function(element) { // for each element, i want to do this ()
    console.log(element);
});

// fat arrow method
collectables.forEach(element => {
    if (element.length > 6){
        console.log(element);
    }
});


// map - goes through ever single element
// and makes a new array with the changes

const someNumbers = [24, 65, 347, 34];

//this returns an array with 5 added to each number
const addFive = someNumbers.map(element => {
    return element + 5  // must return something!
});                     

console.log(addFive);

// filter - similar to map
// if you have it return something
// it will return what you filter out
const filteredNumbers = someNumbers.filter(element => {
    if (element > 50){ //this will filter out everything above 50
        return element;
    }
});
console.log(filteredNumbers);