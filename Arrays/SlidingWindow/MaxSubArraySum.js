let arr = [1,4,2,10,23,31,0,20]
let k = 4
let n = arr.length

let windowSum = 0

for(let i=0; i<k; i++){
    windowSum += arr[i]
}

let maxAns = windowSum

for(let j=k; j<n; j++){
    maxAns += arr[j]
    maxAns -= arr[j-k]
}

console.log(maxAns);