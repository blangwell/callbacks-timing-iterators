
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