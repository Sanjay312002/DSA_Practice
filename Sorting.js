//Implement Bubble Sort---Leetcode-->75.Sort Colours

function bubble(arr){
    const n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}; 
console.log(bubble([29,10,14,37,14]))

//Implementation of selection sort

var selectSort=function(arr){
    const n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}
console.log(selectSort([29,10,14,37,14]))

//Insertion Sort

function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;

        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionSort([29,10,14,37,14,33,8,11]))


//build-in sort method

const fruits=['dragon fruit','jack fruit','apple','banana'];
console.log(fruits.sort());

const nums1=[45,332,65,8,21,2];
console.log(nums1.sort());  //output-[2, 21, 332, 45, 65, 8]
//why the nums1 is properly sorted bcoz js first convert string then it sorted