function findEvenOrOdd (n) {
    console.log(n);
    if(n%2 == 0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

function findMedianSortedArrays (arr1, arr2) {
    let fArray = [...arr1, ...arr2];
    fArray.sort((a, b) => a - b);

    if(findEvenOrOdd(fArray.length)) {
        let last = Math.floor(fArray.length/2);
        let sLast = last - 1;
        return (fArray[last] + fArray[sLast]) / 2
    } else {
        return fArray[Math.floor(fArray.length/2)]

    }
}


// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));