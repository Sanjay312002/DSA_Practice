
//merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));

    return merge(left,right);
}
function merge(left,right){
    let sortArr=[];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortArr.push(left.shift());
        }
        else{
            sortArr.push(right.shift());
        }
    }
return[...sortArr,...left,...right];
}
console.log(mergeSort([8,3,5,4,7,6,1,2]));


//Quick Sort

function quickSort(arr){

    if(arr.length <=1){
        return arr;
    }
    const pivot=arr[0];
    const left=[];
    const right=[];
    for(i=1;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([5,2,9,3,6,1,8,7]))