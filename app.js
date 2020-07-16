
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
