const string = "hello world";
const reverseAstring = (str) => {
 if(str.length === 0){
     return "";
 }   
 let last = str[str.length-1];
 str = str.slice(0, -1)
 return last + reverseAstring(str);
}
console.log(reverseAstring(string));
