// var threeSumClosest = function(nums, target) {
//     let n = nums.length;
//     let first = 0;
//     let second = 1;
//     let third = 2;
//     let sum = Number.MAX_VALUE;
//     let res = Number.MAX_VALUE;

//     while(first <= n - 3 && second <= n - 2 && third <= n - 1) {
//         console.log("inside");
//         sum = nums[first] + nums[second] + nums[third];
//         console.log("sum:  ", sum);
//         if(sum == target) {
//             console.log("===");
//             return sum;
//         } else { 
//             if(Math.abs((sum - target)) < Math.abs((res - target))) {
//                 res = sum;
//             }
//         }
//         first ++;
//         second ++;
//         third ++;
//     }
//     return res;
// };

var threeSumClosest = function (nums, target) {
    let n = nums.length;
    let sum = Number.MAX_VALUE;
    let lastSum = Number.MAX_VALUE;

    for (let first = 0; first <= n - 3; first++) {
        for (let second = first + 1; second <= n - 2; second++) {
            for (let third = second + 1; third <= n - 1; third++) {
                sum = nums[first] + nums[second] + nums[third];
                if (sum == target) {
                    return sum;
                } else {
                    if (Math.abs((sum - target)) < Math.abs((lastSum - target))) {
                        lastSum = sum;
                    }
                }
            }
        }
    }
    if (lastSum === Number.MAX_VALUE) {
        lastSum = 0;
    }
    return lastSum;
};


console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2));
console.log(threeSumClosest([0,1,2], 3));