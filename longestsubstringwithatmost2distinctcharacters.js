//Objective is similar to "Longest Substring with Distinct Characters" except
//this time we can have up to 2 distinct characters.

let s = "eceba"


//O(Nk) where k is the number of distinct elements in the string.

let map = new Map()
let left = 0
let right = 0
let maxLength = 0

while (right < s.length) {
    let char = s[right]
    
    //If we pass a key that's not distinct OR if we're still under max capacity,
    //try updating the maxLength
    if (map.has(char) || map.size < 2) {
        maxLength = Math.max(maxLength, right - left + 1)
    //If we've reached max capacity, update left pointer
    } else if (map.size == 2) {
        let lastMinKey
        let lastMin = Infinity
        
        for (let [key, value] of map.entries()) {
            if (value < lastMin) {
                lastMinKey = key
                lastMin = value
            }
        }
        
        map.delete(lastMinKey)
        left = lastMin + 1
    }
    
    //Update loop
    map.set(char, right)
    right++
}

return maxLength