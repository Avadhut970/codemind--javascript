function isEven(num){
    console.log(`====== Ternary Operator ======`);
    var result = num%2==0 ? "EVEN" : "ODD";
    console.log(`Given number ${num} is ${result}`);
 }
 isEven(5);
 isEven(10);

console.log(`==== Number is Positive or Negative =====`);
function isPositive(num){
    var result = num > 0 ? "Positive" : "Negative";
    console.log(`Given number ${num} is ${result}`);
}
isPositive(7);

var show = function(str){
    var strLength = str.length;
    var result = strLength * strLength;
    return result;
}
var square = show("JavaScript");
console.log(`Given word JavaScript and it's length square is: ${square}`);

var square = show("Google Chrome");
console.log(`Given word Google Chrome and it's length square is: ${square}`);

