function multiply(arr){
    console.log(arr)
    if(arr.length <=0)
    return 1;
else{
    return arr[arr.length-1]* multiply(arr.slice(0,arr.length-1))
}
}
console.log(multiply([1,2,3,4,5]));

//Recursion Question for DSA
//factorial  => n*n-1=> n=4 ->4*3*2*1

function fact(n){
    if(n===0)
    return 1;
else
return n*fact(n-1);
}
console.log(fact([5])) //120

// QUES-2create an array wih range of numbers
//input--> start=1,end=5
function rangeofNum(startNum,endNum){
    if(endNum<startNum){
    return [];}

else {
const numbers=rangeofNum(startNum,endNum-1);
numbers.push(endNum);
return numbers;}
}
console.log(rangeofNum(1,5));
// QUES-3 palindrome
function isPalindrome(x) {
    return x<0 ? false :x === +x.toString().split("").reverse().join("");
    
};
console.log(isPalindrome(121));//true

//QUES-4 fibanocci number
//Fibanocci series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233....
//F(0)=0,F(1)=1
//F(n)=F(n-1) + F(n-2),for n>1
//Input:n=3----->>>>> output:2

//using for loop
var fib1=function(n1){
    let arr=[0,1];
    for(i=2;i<=n1;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[n1]
};
console.log(fib1(9))

//using recursion
function fib(n) {
    if(n<=1) return n
    return fib(n-1) + fib(n-2)
};
console.log(fib(5)) //0, 1, 1, 2, 3, 5

//QUES-5Reverse the string
function reverseStr(str){
    if(str ==="")
    return ""
else{
    return reverseStr(str.substr (1)) + str.charAt(0);
}
}
console.log(reverseStr("hello"));

//process
// reverseStr("hello") => reverseStr("ello")+ h
// reverseStr("hello") => reverseStr("llo")+ eh
// reverseStr("hello") =>reverseStr ("lo")+ leh
// reverseStr("hello") => reverseStr("o")+ lleh
// reverseStr("hello") =>reverseStr ("")+ olleh

//QUES-6    Subsets(Backtracking Algorithm using Recursion)
//Given an integer array nums of unique elements,return all possible subsets(the power set).
//the solution mustno contain duplicate subsets.return the solution in any order

//Input: [1,2,3] ---->>>output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//Input: [0] ------>>>> output: [[],[0]]

function subset(nums){
    let result=[];
    let temp=[];
    function recursivesub(nums,i){
        if(i===nums.length){
        return result.push([...temp])
    }
    temp.push(nums[i]);
    recursivesub(nums,i+1);
    temp.pop();
    recursivesub(nums,i+1)
}
recursivesub(nums,0)
return result;
}
console.log(subset([1,2,3]))