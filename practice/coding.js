let arr=[1,2,3,4,5];
console.log(arr);
// let arr1=arr.slice(2);
// console.log(arr1);
let temparr=[]
for(i=0;i<arr.length;i++)
{
    temparr[i]=arr[i];
}
console.log(temparr); 
//empty an array
let arr3=[5,6,8,9,2];
//console.log(arr3)
//method 1
// arr3=[];//empty of an array using same name but empty array
//method 2
 //arr3.length=0;//change the array length to 0
 //method 3
console.log(arr3)
  while(arr3.length){
     arr3.pop();
 }
  console.log(arr3)
  //method 4
  arr3.slice(0,arr3.length);
  console.log(arr3)

//check the type
let arr4=[1,2,4,5,6,7];
let obj={id:1};
let other='undefind';
let string="hi";
let result=Array.isArray(obj)
console.log(typeof obj)
console.log(result);
arr4.push('hi');
console.log(arr4)
arr4[arr4.length]="hello";
console.log(arr4)
var arr5=['s','a','n','j','a','y'];
var arr50=[23,4,5,3,2,4];
// let result1=arr5.indexOf('a');
// console.log(result1);
let res=arr50.indexOf(4);
console.log(res);
//if the element is inside array remove the element
var list=['milk','banana','orange'];
function checkprod(prod){
    let index=list.indexOf(prod)
    if(list==-1){
        console.log('the product doesnot exist');
    }
        else{
            list.splice(index,1)
            console.log('the product exist')
            console.log(list);
        }
    }
checkprod('milk');

//Ascending & Descending array
var asc=[2,54,3,54,3,123,65,345,65,6,24,64];
let ascend=asc.sort((a,b)=>{
//return a - b; ascending
//return b-a; //dedcending
});
console.log(ascend);

let lett=['e','a','z','x','s','b'];
let letas=lett.sort();
console.log(letas);

//slice - it copy the elements from one to another
//splice it cut the element after cut it remove existing elements
var a=[1];
console.log(a);
a.unshift(3);
a.unshift([1,2,[3,4]]);
a.unshift([6,7,3,[45,23],4]);
console.log(a);
console.log(a.shift());
var b=[3,4,2,5];
console.log(b.shift());
var c=[1,2,3,4,5];
let result2=c.reduce((a,b)=>{
    return a+b;
})
console.log(result2)

var ab=[[1,2],[3,4],[5,6],[7,8]];
let resab=ab.reduce((a,b)=>{
    return a.concat(b);
},[]);
console.log(resab);
var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
  ];
   let resul=animals.filter((val)=>{
    return val.species =='dog';
   })
   console.log(resul);
   let result3=animals.map((val)=>{
    return val.species;
   });
   console.log(result3);