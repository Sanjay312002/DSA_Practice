//method
function isPolindrom(str){
    let rev="";
for(var i=str.length-1;i>=0;i--){
        rev+= str[i];}
   if(rev==str){
       return true;
   }
         else
             return false;
}

 var str1="racecar";
console.log(isPolindrom(str1));

//method 2
function isPolindrom1(str){
    var reve=str.split("").reverse().join("")
if(reve==str){
    return true}
    else
    return false
}
var str2="hello";
console.log(isPolindrom1(str2))

//method3

function isPolindrome3(num){
    var stri=num.toString()
    var reverse1=stri.split("").reverse().join("");
    if(reverse1==stri){
return true}
else
return false
    }
var stri1=123321;
var stri2=121;
console.log(isPolindrome3(stri1));
console.log(isPolindrome3(stri2));

//fibanocci series
//using recursion
function fibanocci(n){
    if(n==1) return 0;
    if(n==2) return 1;
    return fibanocci(n-1) + fibanocci(n-2);
}
const n=10;
let arr=new Array(n);
arr.fill(0);
for(let i=1;i<=n;i++){
    arr[i-1]=fibanocci(i);
}
console.log(arr)

//remove duplicate element
//method 1
let one=['milk','orange','apple','milk','apple','banana'];
 function removeduplicate(one){
    return [...new Set(one)]
 }
 console.log(removeduplicate(one));
//method 2
 function remdupl(one){
    return one.filter((a,b)=>
    one.indexOf(a)===b);
 }
 console.log(remdupl(one))
 
 //prime no
function isPrime(num)
{
    if(num<=1) return false;
    for(i=2;i<=num;i++)
    {
        if(num%0===0)
    return false
}
return true
}
console.log(isPrime(5));

//sum of array
let ar1=[4,5,6,7,3,4];
let sum=0;
for(i=0;i<ar1.length;i++){
    sum+=ar1[i];
}
//method 2
console.log("",+sum)
let summ=ar1.reduce(function(a,b){
    return a+b;

},0);
console.log("",+summ)

//duplicate value
function duplicate(arr){    
    let nearr = [...new Set(arr)];
    console.log(nearr);
}

const array = [1, 2, 3, 2, 3];
duplicate(array)