var greet ="good moring";

var greetlength =greet.length;
console.log("total number of character", greetlength);

var charAtIndex0 = greet.charAtIndex0;
console.log("character available at index 0",charAtIndex0);

var lastchar = greet.charAt(11);
console.log("last char is:",lastchar);
console.log(`"last charcter is ",lastchar`);


var lastcharSmart=greet.charAt(greet.length-1);
console.log("last char is:",lastcharSmart);

var str0ne ="hello";
var strtwo="good moring";

// string templete backtick `,{},$;

var strOne = "Hello";
var strTwo = " Good Morning";
var resultConcat = strOne.concat(strTwo);
console.log("String one: ", strOne, " String two: ", strTwo, " Concat Result: ",resultConcat );
console.log(` String one: ${strOne}, String two: ${strTwo}, Concat Result:${resultConcat}  `);

// String Template Backtick `, $, {}


var greet = "Good Morning";
var indexOfM = greet.indexOf("M");
console.log(`Index of char M: ${indexOfM}`);
//sigle,multi,douc comment

var replace=greet.replace("moring");
console.log(`replace result ${replace}`);

var city = "  Pune  ";
console.log(`Before trim: ${city}, and it's length: ${city.length}`);
var trimResult = city.trim();
console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);

console.log(` Count the total number of spaces available in the start and in the end `);
var totalSpaces = city.length - trimResult.length;
console.log(`Total spaces available: ${totalSpaces}`);


var country = "   Unites States Of America  ";
var trimStartResult = country.trimStart(); // "Unites States Of America  "
console.log(` Total spaces available in the start is: ${country.length - trimStartResult.length}`);


var age = 22;
console.log(` Age ${age}, ${typeof(age)} `);
var ageString = age.toString();// "22"
console.log(` Age string: ${ageString}, data type: ${typeof(ageString)}`);

var greet="good moring";
var results=greet.includes("nin");
console.log(`result: ${results}`);

var greet = "Good Evening";
var greetSlice = greet.slice(0,4);
console.log(`Slice 0, 4 : ${greetSlice}`);

var city =" i love pune";
city.splitResult = city.split("");
console.log(splitResult);

var str = "my imspertion is ratan tata sir";
var result = str.split("");
console.log(result);
console.log(`total word: ${result.length}`);

