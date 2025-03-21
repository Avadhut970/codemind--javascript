////console.log(`==========Task 1 ===========`);

let newarr = [ ];
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const array = arrayNumbers.map((element)=>{
    return element+10;
    newarr.push(element);
})
console.log(array);
////console.log(`==========Task 2 ==========`);

const arrayCube = arrayNumbers.map((element)=>{
    return element*element*element;
})
console.log(arrayCube);
///console.log(`==========Task 3 ===========`);

const nearray = arrayNumbers.map((element,index)=>{
    return element+index;
})
console.log(nearray);