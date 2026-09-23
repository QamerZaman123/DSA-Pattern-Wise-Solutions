let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let n = height.length

let left = 0
let right = n-1

let leftMax = height[left], rightMax = height[right]

let water = 0

while(left < right){
    if(leftMax < rightMax){
        left++
        leftMax = Math.max(leftMax, height[left])
        water += leftMax - height[left]
    }else{
        right--
        rightMax = Math.max(rightMax, height[right])
        water += rightMax - height[right]
    }
}

console.log(water)