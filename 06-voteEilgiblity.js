function voteEligible(age) {
    if (age<0 || age==0 || age>=130 || age==null) {

      console.log(`the not valid data ${age}`);
              
    } else { if (age>=18){
        console.log(`the age is voteEligible ${age}`);

        
    }
    else{
        console.log(`the not eligiable: ${age}`);
        
    }
    
}}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);


function weekDay(dayNum){
    switch (dayNum) { // 8
      case 1:
          console.log(`${dayNum} - Monday`);
          break;
      case 2:
          console.log(`${dayNum} - Tue`);
          break;
      case 3:
          console.log(`${dayNum} - Wed`);
          break;
      case 4:
          console.log(`${dayNum} - Thur`);
          break;
      case 5:
          console.log(`${dayNum} - Fri`);
          break;
      case 6:
          console.log(`${dayNum} - Saturday`);
          break;
      case 7:
          console.log(`${dayNum} - Sunday`);
          break;
      default:
          console.log(`Invalid Data: ${dayNum}`);
          break;
    }
  }
  weekDay(9);
  // 1 -- Monday
  // 2 -- Tuesday
  // 3 -- Wed
  // 7 -- Sunday



  console.log(`===== Program to print numbers from 1 to 10 =======`);

for (var index = 1; index < 11; index++) {
   console.log(index);
}

console.log(`===== Program to print numbers from 5 to 10 =======`);
for (let index = 5; index < 11; index++) {
    console.log(index);
}

console.log(`===== Program to print numbers from 0, 2, 4, 6, 8, 10 =======`);
for (let index = 0; index < 11; index=index+2) {
    console.log(index);
}



console.log(`===== Print the table of 5 =======`);
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
}

console.log(`===== Print the table of 4 in reverse order =======`);
for (let index = 40; index >=4; index=index-4) {
    console.log(index);
}