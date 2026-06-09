let height = [1,8,6,2,5,4,8,3,7]

let a = maxAread(height)
console.log(a);

function maxAread(height){
    let n = height.length
    let maxArea = 0;
    let left = 0;
    let right = n-1; 

    while(left<=right){
        let h = Math.min(height[left],height[right])
        let w = right-left
        let area = w*h
        maxArea = Math.max(area, maxArea)

        if(height[left]<=height[right]){
            left++
        }else{
            right--
        }

    }
    return maxArea

}