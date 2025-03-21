const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const ap = arrayNumbers.filter((element)=>{
    return element>50;
})
console.log(ap);
const sr = arrayNumbers.filter((element)=>{
    return element%2==0;
})
console.log(sr);
const sk = arrayNumbers.filter((element)=>{
   return element%2!==0;
})
console.log(sk);
const anna = arrayNumbers.filter((element)=>{
    return element%5==0;
})
console.log(anna);
const pg = arrayNumbers.filter((element)=>{
    return element>20 && element<50
})
console.log(pg);

