function greaternumber(n1,n2) {
    var result=n1>n2 ? n1:n2;
     console.log(`the grater number is:${result}`);
         
}
greaternumber(10,-10);
greaternumber(800,899);

function isEvenOrOdd(num) {
    var ap= num%2==0 ? "even" : "odd";
    return ap;    
}
var result= isEvenOrOdd(29);
console.log(`the number is:${result}`);

var result= isEvenOrOdd(44);
console.log(`the number is:${result}`);

var result= isEvenOrOdd(0);
console.log(`the number is:${result}`);

var result= isEvenOrOdd(101);
console.log(`the number is:${result}`);

function wordLength(word) {
   var sr=word.length%2==0 ? "even" : "odd";
   return sr;
}
var result= wordLength("JavaScript");
console.log(`word length is:${result}`);

var result= wordLength("developer");
console.log(`word length is:${result}`);

var result= wordLength("Google");
console.log(`word length is:${result}`);

