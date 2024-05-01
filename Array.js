//Array Declaration
let ob1={
    name : "sanjay",
    bike : "royalenfiled"
};
let array=["apple","Banana","potato","tomato",ob1];//we can store object in array
console.log(array[4]);
console.log(array[3].name);
console.log(array.length);

//Array - Add and Remove elements

//push and pop -- add and remove elements from last
array.push("splendor");
array.push("figma");
console.log(array);
array.pop();
array.pop();
console.log(array);

//unshift and shit-- add and remove element from top of the array

array.unshift("russia"); //->add element from top of array
array.unshift("australia");
console.log(array);
array.shift();
array.shift();
console.log(array);

//loop 
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//while
let i1=0;
while(i1<array.length){
    console.log(array[i1]);
    i1++;
}

//Inbuild methhods

//map
const numbers=[1,2,3,4,5];
const no1=numbers.map((item,index,array)=>
{
    console.log(item,index,array);  //item->each values in array,index->index value,array->the total array values
    return item + 5; //op->[6,7,8,9,10]
});
console.log(no1);

//filter
const no2=numbers.filter((item,index,array)=>{    //filter return only the ele for satisfied the condiion
return item>3;  //it only return greater then 3
})
console.log(no2);

//reduce -> it will taken an array and it reduce final one value
const no3=numbers.reduce((preval,curval)=>  //in first index(numbers[0]) has no previous value so we define initial value is 0
{
return preval+curval;
},0); //if we change the initial value the answer is changed based on the initial value
console.log(no3);

//some  -> it is same as filter but it produce boolean type of output
const no22=numbers.some((item,index,array)=>{

   //return item >7;// in numbers array there is no value(item) is greater then 7 so it return false
   // return item >4;
    return item <4;
})
console.log(no22);

//every  -> in this method each and every element(value) is compared(greater or lower then) to particular value

const no4=numbers.every((item,index,array)=>
{
    return item < 7;
})
console.log(no4)

//find  ->  it check the ele is greater then the particular value it is true then 
//it return the ele after the correct ele otherwise it is undefined
const no5=numbers.find((item,index,array)=>
{
    return item >3;//it check any ele is greater then 3 it is true then it return the ele after 3 
})
console.log(no5);


//Spread and Rest operator
//spread operator
const nums1=[1,2,3,4];
const nums2=[5,6,7,8];
const fiNum=[...nums1,...nums2];
console.log(fiNum);

function sum(...numbers){
    return numbers;

}
console.log(sum(nums1,nums2,5,"hello"));

//more array methods
//concat
const newAr=nums1.concat(nums2,array);
console.log(newAr)

//slice -->if we can acces certain nubers or certain part of numbers in array

//array=["apple","Banana","potato","tomato",ob1]
const ar1=array.slice(0,3); //3-1=2 so return[0,1,2]
console.log(ar1)

//splice--> we delete particular part of array and add an new value
array.splice(1,3,"hi","hello");
console.log(array);

//fill --> it remove the elemets from an array and fill the new values in existing place
 const duplicate=[4,5,6,7];
 duplicate.fill(7);//it will be remove 4,5,6,7 and fill into 7
 //duplicate.fill(0,2)//we use start index(2->item,0->index)
 console.log(duplicate);

 //findIndex
 const index=nums1.findIndex((item)=>
 {
    item === 4;
 });console.log(index);

 //Flat //it change the subarray into normal array sometimes
 //it does not work so we can use depth inthe array
 const flatedar=[1,2,3,[4,5],[[7,8],9,0]];//in array inside subarray that time is not work so use depth
 console.log(flatedar);
 const flatedarans=flatedar.flat(2);
 console.log(flatedarans)

 //reverse
  nums1.reverse();
  console.log(nums1)

  //sort
  const unsorted=[5,2,10,7,3,1];
  console.log(unsorted)
  unsorted.sort()
console.log(unsorted)

