// Given an integer array return all the triplets nums[i], nums[j], nums[k]
// such that nums[i], nums[j], nums[k] do not equal to each other
// and there addition should be zero 0

function threeSum(nums){
    let res = [];

    nums.sort((a,b) => a-b)

    let i = 0;

    for(let i=0; i<nums.length - 2; i++){
        if (i>0 && nums[i]===nums[i-1]) continue
    
        let j = i + 1;
        let k = nums.length - 1

        while(j<k){
            
            let sum = nums[i] + nums[j] + nums[k]
            
            if(sum === 0){
               res.push([nums[i], nums[j], nums[k]])
               while(j<k && nums[j] === nums[j+1]) j++
               while(j<k && nums[k] === nums[k-1]) k--

               j++
               k--
            }else if(sum > 0){
                k--
            }else{
                j++
            }

        }
    }

    return res
}
  
let nums = [-1,0,1,2,-1,-4];
let res = threeSum(nums)
console.log(res)