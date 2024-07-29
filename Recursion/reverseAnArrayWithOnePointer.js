function reverseArray (arr, i, n) {
    if(i >= n / 2) return arr;
    swap(arr, i, n - i - 1);
    return reverseArray(arr, i + 1, n);
}


let  arr = [1, 2, 3, 4, 5, 0];
let n = arr.length;
let res = reverseArray(arr, 0, n);

console.log(res);


function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}