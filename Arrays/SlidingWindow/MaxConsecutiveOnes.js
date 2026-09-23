let arr = [1,1,1,0,1,1,1,1]
let n = arr.length

let maxCount = 0
let currentCount = 0
let i =0

while(i < n){
    if(arr[i] === 1){
        currentCount++
    }else{
        maxCount = Math.max(maxCount, currentCount)
        currentCount = 0
    }
    i++
}

maxCount = Math.max(maxCount, currentCount)

console.log(maxCount)