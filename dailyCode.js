//Power of 2

function powerTwo(n)
{
    if(n < 1) return false;
    return (n & (n-1)) === 0;
}
console.log(powerTwo(1));//t
console.log(powerTwo(4));//t
console.log(powerTwo(5));//f

//Ques-2
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//Input: nums = [9,6,4,2,3,5,7,0,1]  Output: 8
//Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
//8 is the missing number in the range since it does not appear in nums
var missingNumber = function(nums) {
    const gSum=(nums.length * (nums.length + 1)) /2;
    const nSum=nums.reduce((acc,el) => acc + el,0);
    return gSum - nSum;
};

//ques-3
//Two pointer approach square of sorted array
/*Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].*/

var sortedSquares = function(nums) {
    let result=[];
    let left=0;
    let right=nums.length-1;
    let resultIdx=nums.length-1;
    while(left <= right)
    {
        let leftval=Math.pow(nums[left],2);
        let rightval=Math.pow(nums[right],2);

        if(leftval < rightval)
        {
            result[resultIdx]=rightval;
            right--;
        }else{
            result[resultIdx]=leftval;
            left++;
        }
        resultIdx--;
    }
    return result;
};


/*QUES-4 --- Palindrome linked list
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindrome = function(head) {
    let string1="";
    let string2="";
    let node=head;
    while(node != null){
        string1=`${string1}${node.val}`
        string2=`${node.val}${string2}`
        node=node.next;
    }

    return string1===string2
};