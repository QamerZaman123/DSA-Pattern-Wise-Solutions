// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeros(nums){
    let i = 0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== 0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            i++
        }
    }

}    
let nums = [0,1];
moveZeros(nums)
console.log(nums);