//Two sum when array is sorted
//Finding sum of two numbers in an array that adds up to a target

let nums = [2,11,7,15];
let target = 9

let ans = twoSum(nums,target)

console.log(ans);

function twoSum(nums,target){
    let i = 0;
    let j = nums.length - 1;
    let sum;
    
    while(i<j){
        sum = nums[i] + nums[j]
        if(sum === target){
            return [i,j]
        }
    
        if(sum>target){
            j--
        }else{
            i++
        }
    }
}