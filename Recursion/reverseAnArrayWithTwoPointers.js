function reverseArray (arr, l, r) {
    if(l >= r) return arr;
    swap(arr, l ,r);
    // console.log(arr);
    return reverseArray(arr, l + 1, r - 1);
}


let  arr = [1, 2, 3];
let n = arr.length;
let res = reverseArray(arr, 0, n - 1);

console.log(res);


function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}