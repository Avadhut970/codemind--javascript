

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            return false;
        }
        
    }
    return true
}
const array = [3,9,7,6,19,29,53];
let primeCount = 0;
for (const element of array) {
    if (isPrime(element)) {
        primeCount++;
    }
}
console.log(array);

console.log(`Count is ${primeCount}`);
console.log(`------------------------------------------------`);


let str = "Revision is the mother of success";
function countSpaces(str) {
    return str.split(" ").length - 1;
}
console.log(str);
console.log(`total space ${countSpaces(str)}`);


console.log(`------------------------------------------------`);
let str2="JavaScript is the language of intrenet world";

function count(str2) {
    return str2.split(" ").length-1;
  
}
console.log(str2);
console.log(`total space ${count(str2)}`);
