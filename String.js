//declare string
const string=new String("laptop"); //it is not mostly used
const string1="cricket"
console.log("hi helo welcome");
console.log('hi hello welcome');
console.log(`hi hello welcome       
what is your name
how are you`)   //backticks are used in multiple line
console.log `hi hellloo ${string} how much you rate`

const str="hi i am sanjay i'm frontend developer"
//Accessing character
console.log(str.length);
console.log(str[8]);
console.log(str.charAt(5))
//Looping element
for(i=0;i<str.length;i++){
    console.log(str[i])
}

//In js string is immutable
console.log(str.replace("i am","I'm"));  //it does not change the string it create new string
console.log(str.replace('h','H'))
console.log(str.concat(" and i like to explore new technologies"));
const con="    hi hello welcome"
console.log(con.trim());//it removes tail and lead space(start and end)
//console.log("Boomika")

//Searching
console.log(str.indexOf("sanjay"));
console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));

console.log(str.startsWith('h'));//these two are return true or false based the input
console.log(str.endsWith('r'))
console.log(str.substring(5,27))//it has two values start and end values
console.log(str.slice(5))//it is same as substring

//converting case
const toConverted=7;
console.log(toConverted)//now it is string
console.log(String(toConverted));//now it will be converted into string
//we using String function we can converted into anytype into string

//object into string
const toConverted1= {name : "sanjay"}
console.log(String(toConverted1)); //[object object] //but we cannot use this method convert object into string
//output is object 

//we using another method covert the object into string
console.log(JSON.stringify(toConverted1)); //{"name" : "sanjay"}//now it will be changed string

console.log(str.toLowerCase());
console.log(str.toUpperCase());

//access the ASCII value of the particular character
//hi i am sanjay i'm frontend developer
console.log(str.charCodeAt(5)) // particular index value
//converted ascii value into character
console.log(String.fromCharCode(97))

//string comparision
//0-two strings are equal , -1=two strings are not equal
const str1="apple";
const str2="car"
console.log(str1.localeCompare(str2));
console.log(str.includes("sanjay")) //it checks the particular words are present or not
//it present return true otherwise false

//splitting and joining string
console.log(str.split("a")); // if we put any character the it avoid the character and print others
const arr=["Himalayan", " Thor"]
console.log(arr.join(" and"))// if we use and between those string the and will be assign

//Ques-01 Polindrom

function isPolyndrom(x){
    return x === +x.toString().split(" ").reverse().join(" ");
}
const res=isPolyndrom(121);
console.log(res);

//QUESTION-02
//Truncate the input
//Input str : "Subscribe to RoadsideCoder" maxlength=9 output=subscribe...

function truncate(str,maxlength){
    if(str.length > maxlength){
        return str.slice(0,maxlength) + "...";
    }else return str
}
console.log(truncate("Subscribe to RoadsideCoder",9))

//Question-3
//Hamming Distance Input : x="hello" y="hwllr" output=2

function hamingDistance(x,y){
    if(x.length !== y.length){
        throw new Error(" Strings are must be equal");
    }
    let distance=0;
    for(let i=0;i<x.length;i++){
        if(x[i] !== y[i]){
            distance ++
        }
    }
    return distance
}
console.log(hamingDistance("hello","hwllr"));

//Variation-2
//given two integers x and y return the hamming distance between their bits

function hammingDistance(x,y){
    x=x.toString(2);
    y=y.toString(2);
    if(x.length < y.length){
        while(x.length !== y.length)
        x="0"+x;
    }
    else{
        while(x.length !== y.length)
        y="0"+y;
    }
    let distance=0;
    for(i=0;i<x.length;i++){
        if(x[i] !== y[i]){
            distance++;
        }
        
    }
    return distance
}
console.log(hammingDistance(2,9))

//QUESTION-3  Valid Anagram
// Anagram is a word or phrase formed by rearranging the letters of
//a diff word or phrase

//Input: (s= "anagram"), (t="nagaram");---->>> output: true;
//Output: (s= "rat"), (t="car");---->>> output: false;


var isAnagram = function(s, t) {
   if(s.length !== t.length) return false;
   let obj1={};
   let obj2={};
   for(i=0;i<s.length;i++){
       obj1[s[i]]=(obj1[s[i]] || 0) + 1;
       obj2[t[i]]=(obj2[t[i]] || 0) + 1;
   }    
   for(const key in obj1){
       if(obj1[key] !== obj2[key])
       return false;
   }
   return true;
};
console.log(isAnagram("anagram","nagaram"));