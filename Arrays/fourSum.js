// var fourSum = function(nums, target) {
//     let n  = nums.length;
//     let map = new Map();
//     for(let i = 0; i < n; i++) {
//         for(let j = i + 1; j < n; j++) {
//             for(let k = j + 1; k < n; k++) {
//                 for(let l = k + 1; l < n; l++) {
//                     if(nums[i] + nums[j] + nums[k] + nums[l] == target) {
//                         let subArr = [nums[i], nums[j], nums[k], nums[l]];
//                         subArr.sort((a, b) => a - b);
                        
//                         let mKey = subArr.join(",");
//                         map.set(mKey, subArr);
//                     }
//                 }
//             }
//         }
//     }

//     return Array.from(map.values());    
// };

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let results = [];
    let n = nums.length;

    for(let i = 0; i < n - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < n - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1;
            let right = n - 1;
            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum == target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;
                    left ++;
                    right --;
                } else if(sum < target) {
                    left ++;
                } else {
                    right --;
                }
            }
        }
    }
    return results;
}

console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([2,2,2,2,2], 8));


// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
