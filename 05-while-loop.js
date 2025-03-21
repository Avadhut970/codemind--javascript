
console.log("=====WAP to print te table of 5 =========");
// initialization i=5
// condition i<=50
// update Expression i+5


var i = 80;
while (i>=8) {
    console.log(i); //5
    i=i-8;
}


/////// do-while-loop

console.log("=====     do-while-loop    =========");

var index =10;
do {
    console.log(index);
    index=index+10;
} while (index<=100);


console.log(`===== break =======`);
for (let index = 0; index <= 10; index++) {
    console.log(index);
    if (index==5) {
        break;
    }   
}
console.log(`======= continue ============`);
for (let index = 0; index <= 5; index++) {
    console.log(`Start ${index}`);
    if (index==2) {
        continue;
    }
    console.log(`End ${index}`);
}