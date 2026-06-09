let nums = [1,1,0,1,2,0,1,0,2,1,1]

sortColors(nums)
console.log(nums);

function sortColors(nums){
    let n = nums.length
    let i = 0;
    let j = 0;
    let k = n-1;

    while(i<k){
        if(nums[i] === 0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            i++
            j++
        }else if(nums[i] === 2){
            let temp = nums[k]
            nums[k] = nums[i]
            nums[i] = temp
            k--
        }else{
            i++
        }
    }

}