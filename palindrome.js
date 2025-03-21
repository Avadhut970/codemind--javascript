function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage
console.log(`madam is a Palindrome - ${isPalindrome("madam")}`);  
console.log(`Sunday is a Palidrome - ${isPalindrome("Sunday")}`);
console.log(`mom is a Palidrome - ${isPalindrome("mom")}`);
console.log(`Listen is a Palidrome - ${isPalindrome("Listen")}`);
console.log(`dad is a Palidrome - ${isPalindrome("dad")}`);



// function isPalindrome(str) {
//     return str  = str.split('').reverse().join('');
    
// }

// console.log(`madam is a Palindrome - ${isPalindrome("madam")}`);  
// console.log(`Sunday is a Palidrome - ${isPalindrome("Sunday")}`);
// console.log(`mom is a Palidrome - ${isPalindrome("mom")}`);
// console.log(`Listen is a Palidrome - ${isPalindrome("Listen")}`);
// console.log(`dad is a Palidrome - ${isPalindrome("dad")}`);
