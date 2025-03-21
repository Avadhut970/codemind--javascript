function  stringHandson() {
    var str= "   Hey you are doing good, keep it up   ";
     console.log(str);
     
    // 02

    console.log(`calculate the string is: ${str.length}`);

    /// 03

    var result = str.trim();
    console.log(`The string after extra space is ${result.length}`);

    /// 04
    console.log(`Extra space is: ${str.length-result.length}`);

    /// 05
    console.log(`The first char is: ${result.charAt(0)} and last char is ${result.charAt(result.length-1)}`);
    
    /// 06
    var aft=result.split("");
    console.log(`total words in string: ${aft.length}`);

    /// 07

      console.log(`Index of Good is in string is ${str.indexOf("good")}`);
      
    
    /// 08
    console.log(`the substring is: ${str.substring(22)}`);
    
    ///09

    console.log(`the string end with "up": ${result.endsWith("up")}`);
     

    /// 10

    console.log(`the string start with "Hey": ${result.startsWith("Hey")}`);
    
    
    
  
    
}
stringHandson();