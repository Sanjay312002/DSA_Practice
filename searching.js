//LINEAR SEARCHING
//QUESTION-1
//Implemented linear serach in js
//write a function to search "target" in the nums if target exists then return its index otherwisse -1

//Input : nums=[4,5,6,7,0,1,2] target=0 o/p=4
//Input : nums=[4,5,6,7,0,1,2] target=3 o/p=-1

function linearSearch(nums,target){
    for(i=0;i<nums.length;i++){
        if(target === nums[i]){
            return i;
        }
    }return -1
}
console.log(linearSearch([4,5,6,7,0,1,2],0))
console.log(linearSearch([4,5,6,7,0,1,2],3))


//Global linearsearch(is same as previous code but morethen one element the return those index)
//Input : nums=[4,5,0,6,7,0,1,2] target=0 o/p=2,5
//Input : nums=[4,5,6,7,0,1,2] target=3 o/p=-1

function globalLinear(nums,target){
    const result=[];
    for(let i=0;i<nums.length;i++){
        if(target === nums[i]){
            result.push(i)
        }
    }
    if(result.length === 0) return -1;
    return result;
}
console.log(globalLinear([4,5,0,6,7,0,1,2],0))

//Question-2
//Implementing Binary Search
//Input : nums=[-1,0,3,5,9,12]  target=9  output=4
//Input : nums=[-1,0,3,5,9,12]  target=17  output=-1
function binarySearch(nums,target){
    let start=0;
    let end=nums.length-1;
    while(start <= end){
        let middle=Math.floor((start + end)/2);
        if(nums[middle] === target){
            return middle;
        }else if(nums[middle] < target){
            start=middle + 1;
        }
        else{
            end = middle - 1;
        }
    }
    return -1;
}
console.log(binarySearch([-1,0,3,5,9,12],39))

//QUESTION-3
//K-th missing positive integer(using linear search)
//Input : nums=[2,3,4,7,11]  k=5  output = 9

function positive(nums,k){
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] <= k + count){
        count ++;
    }
    }return k+count
};
console.log(positive([2,3,4,7,11],5))



//Question-4
//minimum count of positive integer and negative integer
//Input : nums=[-2,-1,-1,1,2,3]  k=5  output = 3
//Input : nums=[2,1,1,1,2,3]  k=5  output = 5


function maxCount(nums){
    return Math.max(upperBound(nums),lowerBound(nums));
}
function upperBound(nums){
    let low=0;
    let high=nums.length-1;
    while(low < high){
        let mid=Math.ceil((low+high)/2);
        if(nums[mid]<0)
            low = mid;
            else
            high=mid - 1;
            
        }
        return nums[0] >= 0 ? 0 : low + 1;
    }

function lowerBound(nums)
{
    let low=0;
     high=nums.length-1;
    while(low < high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid] > 0)
            high = mid;
            else
            low=mid+1;
            
        }
        return nums[nums.length-1] <= 0 ? 0 : nums.length - low;
    
}
console.log(maxCount([-2,-1,-1,1,2,3]));

