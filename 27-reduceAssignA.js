const array_Number = [20,11,40,25,37,49,9,90,60,2,19];


let sumarray = array_Number.reduce((runningTotal,element)=>{
return runningTotal+element;

},0);
console.log(sumarray);

let sm = array_Number.filter((element)=>{
    return element%5==0;
    
    });
    console.log(sm);

    let arraysum = sm.reduce((runningTotal,element)=>{
        return runningTotal+element;
    },0)
    console.log(arraysum);
    