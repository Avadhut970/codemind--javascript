let ap = () =>{
    console.log("Good Moring ,Today is Wenesday");
    
}
ap();

///02

let value = (n1,n2,n3) => {
    console.log(`multi :${n1*n2*n3}`);
  
}
value(5,5,2);

let valu = (n1,n2,n3=1) => {
    console.log(`multi :${n1*n2*n3}`);
  
}
valu(10,4);



let add = (m1,m2,m3,m4,m5) => {
    let result=m1+m2+m3+m4+m5;
    return result;
    
  }
  let valuee = add("I am ", "learning ", "ES6 ", "features ", "in depth");
  let val= add(100,100,200,349,756);
  console.log(`add the concat metod:${valuee}`);
  console.log(`add the  metod:${val}`);

  