//Ques-1  - Second_Largest
//Given an array Arr of size NaN,print second largest
//distinct element of an array

//Input : [12,35,1,10,34,1] ---->> output :34
//Input : [10,5,10] ---->> output :5
function secondLarg(arr){
    let largest=-1;//Number.NEGATIVE_INFINITY;          // we -1 or Number.NEGATIVE_INFINITY
    let secondLargnum=-1;//Number.NEGATIVE_INFINITY;
    for(i=0;i<arr.length;i++){
        if (arr[i]>largest) {
        secondLargnum=largest;
        largest=arr[i];
        }
        else if(arr[i] != largest && arr[i]>secondLargnum){
            secondLargnum=arr[i];
        }
    }return secondLargnum;
}
console.log(secondLarg([12,35,1,10,34,1]));

//Ques_2 
//Rotate Array by k
//Given an integer array nums,rotate the array to the right by k steps,
//where k is non -negative 
//input : nums=[1,2,3,4,5,6,7]  k=3 o/p :[5,6,7,1,2,3,4]

function rotateArray(nums,k){
    let size=nums.length;
    if(k>size){
        k=k%size;
    }
    const rotated=nums.splice(size-k,size);
    nums.unshift(...rotated);
    return nums;
}
console.log(rotateArray([1,2,3,4,5,6,7],3))


//type-2
function rotateArray1(nums,k){
    let size=nums.length;
    if(k>size){
        k=k%size;
    }
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
    return nums;
}
function reverse(nums,left,right){
    while(left<right){
        const temp=nums[left];
        nums[left++]=nums[right];
        nums[right--]=temp;
    }
}
console.log(rotateArray1([1,2,3,4,5,6,7],3))

//Ques 3 --Remove duplicates from sorted array
//Input: [1,1,2] --->>>output : 2 ,[1,2,.....]
//Input: [0,0,1,1,1,2,2,3,3,4] --->>>output : 5 ,[0,1,2,3,4.....]

function removeDupl(nums1){
    for(i=0;i<nums1.length-1;i++){
    if(nums1[i]===nums1[i+1]){
        nums1.splice(i+1,1);
        i--;
    }
}return nums1.length;
}
console.log(removeDupl( [0,0,1,1,1,2,2,3,3,4]))

//Without BuiltinMethod (using 2Pointer method)

function removeDup2(nums2){
    if(nums2.length === 0) return 0;
    let i=0;
for (let j = 1; j <nums2.length; j++)
{
    if(nums2[i] !== nums2[j]){
    i++;
    nums2[i]=nums2[j];
}
}
return i+1;
}
console.log(removeDup2( [0,0,1,1,1,2,2,3,3,4]))


//kadanes algorithm
//maxmium subarray
//Input : [-2,1,-3,4,-1,2,1,-5,4]  --->>>output: 6, [4,-1,2,1]
function maxsubarr(nums3){
    let sum=0;
    let max=nums3[0];
    for (let i = 0; i < nums3.length; i++) {
        sum +=nums3[i];
        if(sum > max){
            max=sum;
        }if(sum<0){
            sum=0;
        }    
    }return max
}
console.log(maxsubarr([-2,1,-3,4,-1,2,1,-5,4]))


