
// fuction with no argument or parameter 
function test() {

console.log("test");
    
}
test(); // invocation or function call


// type:2    function with argument or parameter and no return value

function squre(num) {
    console.log(`finding the squar: ${num}`);
   var result= num*num;
   console.log(`square is: ${result}`);
       

}
squre(8);
squre(19);

// tupe 3: function with argument or parameter and return value

function addition(n1,n2,n3,n4) {

    console.log(`number is add: ${n1,n2,n3,n4}`);
    var result = n1+n2+n3+n4;
    return result;
    
    
}

var returnValue =addition(5,7,8,9);
console.log(`addition is: ${returnValue}`);

var returnValue = addition(33.78, 89.90, 1879, 7896);
console.log(`Addition is: ${returnValue}`);

function fullname(firstname,middlename,lastname) {
    console.log(`full name is`);
    var result=firstname+middlename+lastname;
    console.log(result);
  
}
fullname("avadhut","ramchandra","pol");