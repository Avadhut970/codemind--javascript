function reversstring(str)
{
  return str.split("").reverse().join("");  
}
 console.log(reversstring("hello"));

 

 ////////////// revesion 40
const array=[7,15,20,3,25,2,40];

let arr=array.filter((element)=>{
     return element%5==0;
});
console.log(arr);


const sum= array.reduce((runnigTotal,element)=>{
    return runnigTotal+element;
},0);
console.log(sum);


const multi= array.reduce((runnigTotal,element)=>{
  return runnigTotal*element;
},1);
console.log(multi);


const arrayMarks = [45, [90, 60], 70, 40, [ 8,9, [3, 0] ], ,7 ,  ,]
console.log(`Length : ${arrayMarks.length}`);
const flattenArray = arrayMarks.flat(2);
console.log(flattenArray);


const arrayWithEmptySlots = [45, , 70, 40, , ,7 ,  ,]
const res = arrayWithEmptySlots.flat();
console.log(res);


const frdList = ["Jenny", "Stew", "Bill", "Elon"];
frdList.sort(); // Sorting in ascending order 
frdList.reverse(); // dscending order 
console.log(frdList);

const arrayNum = [9, 4, 11, 31, 81, 250];

// arrayNum.sort(); // Sorting 
arrayNum.sort((a,b)=>{
    return a>b? 1: -1;
});
console.log(arrayNum);
// arrayNum.reverse();


////