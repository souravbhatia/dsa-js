var maxArea = function(height) {
    let n = height.length;
    let l = 0;
    let r = n - 1;
    let res = 0;

    while (l < r) {
        let p = (Math.min(height[l], height[r])) * (r - l);
        res = Math.max(res, p);
        if(height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));