const arrayfruits_sesonal =["Banana","Orange","Apple","Mango","Water Melon"];
const fruits=arrayfruits_sesonal[0];
const water= arrayfruits_sesonal[arrayfruits_sesonal.length-1];
console.log(`print the frist element :${fruits}`);
console.log(`last element is:${water}`);


/////  02
 arrayfruits_sesonal.unshift("Papaya");

 console.log(`add papaya before the banana:${arrayfruits_sesonal}`);
 
///// 03

arrayfruits_sesonal.splice(4, 1)
console.log(`delet the mago from array:${arrayfruits_sesonal}`);

//// 04

arrayfruits_sesonal.push("Pineapple");
console.log(`add element is last :${arrayfruits_sesonal}`);

//// 05

arrayfruits_sesonal.splice(4,0,"Dragon Fruit");
console.log(`insert the element :${arrayfruits_sesonal}`);


/// 06

arrayfruits_sesonal.splice(2,1,"kiwi");
console.log(`replace an element "orange":${arrayfruits_sesonal}`);

//// 07
// const arrayfruits_sesonal_1 =["Banana","Orange","Apple","Mango","Water Melon"];
const result=arrayfruits_sesonal.splice(1,4);
console.log(`strating 4 element: ${result}`);

//08

//const array =["Banana","Orange","Apple","Mango","Water Melon"];
//console.log(array);
const res=arrayfruits_sesonal.slice(arrayfruits_sesonal.length-3);
console.log(`only last 3 element : ${res}`);

