//polindrome in number
let isPolindrom = function(x) {
return x === +x.toString().split("").reverse().join("");
//return x<0 ? fasle :x === +x.toString().split("").reverse().join(""); //leetcode reduce (optimized solution)
};
const res=isPolindrom(121);
console.log(res)



//method
// function isPolindrom(str){
//     let rev="";
// for(var i=str.length-1;i>=0;i--){
//         rev+= str[i];}
//    if(rev==str){
//        return true;
//    }
//          else
//              return false;
// }
//  var str1="racecar";
// console.log(isPolindrom(str1));
