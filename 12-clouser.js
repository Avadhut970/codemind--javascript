
var globalVariable = 100;
function outer(){
    let outerFunVariable = 200;
    let inner = function(){
        console.log(`Inside inner function`); 
        let innerFunVariable = 300;
        console.log(innerFunVariable);
        console.log(outerFunVariable);
        console.log(globalVariable); 
    }
    return inner;
}
var result = outer();
result();


/// callback function


// Jenny - Home work preparation
// Home work completion
// Callback to Elon 

function jenny(callbacks){
    console.log(`==== Jenny went home and have snacks======`);
    console.log(`===== Jenny started home work preparation =========`);
    console.log(`===== After 2 hours she have completed her home work =======`);
    // Elon Callback
    callbacks();
}
// Elon - Playing Match
// Elon came back and started copying home work
//  Home work completion
let elon = function(){
    console.log(`******** Elon went home and have snacks ***********`);
    console.log(`******** Elon went to play match ***********`);
    console.log(`******** Elon came back and started copying homework ***********`);
    console.log(`******** Elon Completed his home work ***********`);
}

jenny(elon);



console.log(`====== setTimeout() ======`);
let show = function(){
    console.log(`== Inside show FE ===`);
}

setTimeout(show, 5000);




setTimeout(function(){
    console.log(`=== One ===`);
    setTimeout(function(){
        console.log(`=== two ===`);
        setTimeout(function(){
            console.log(`=== three ===`);
            setTimeout(function(){
                console.log(`=== four ===`);
            }, 7000);
        }, 6000);
    }, 5000);
}, 4000);



let promise = new Promise(function(success, failure){
    // success("Yes.. Jenny.. Let get married...");
    failure("Ohh... Jenny Sorry. I can't marry with you.. ");
});
promise.then(function(success){
    console.log(`======= Inside then() =====`);
    console.log(success);
})
.catch(function(failure){
    console.log(`======= Inside catch() =====`);
    console.log(failure);
})
.finally(function(){
    console.log('Finally....');
    
})



'use strict'

// age = 20;
// console.log(age);

// person = {
//     city : "Pune"
// }
// console.log(person);

function show(n, n, n){
    console.log(n);
}
show(10, 20, 30);