//Arrow Function - With no args or parms and no return values
let add = () => {
    console.log("Addition");
}
add();

// AF with arguments and no return value
let addition = (p1, p2=0) => {
   console.log(`Addition: ${p1+p2}`);
}
addition(10, 20);
addition(40);

// AF with arguments and return value

let square = (num) => {
   let result = num * num;
   return result;
}
let squareResult = square(5);
console.log(squareResult);


//// WAf to get cube of 7

let cube = (num) => {
    let res = num*num*num;
    return res;
}
let cuberesult = cube(7);
console.log(cuberesult);
