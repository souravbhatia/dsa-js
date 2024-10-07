function mergeSort(arr, low, high) {
    if(low >= high) return arr;
    let mid = Math.floor((low + high)/2);
    // console.log("1: ", arr, low, mid, high)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    return arr;
}

function merge(arr, low, mid, high) {
    let temp = [];
    let iLeft = low;
    let iRight = mid + 1;
    while(iLeft <= mid && iRight <= high)  {
        if(arr[iLeft] <= arr[iRight]) {
            temp.push(arr[iLeft]);
            iLeft ++;
        } else {
            temp.push(arr[iRight]);
            iRight ++;
        }
    }
    while(iLeft <= mid) {
        temp.push(arr[iLeft]);
        iLeft ++;
    }
    while(iRight <= high) {
        temp.push(arr[iRight]);
        iRight ++;
    }
    // console.log("2: ", temp);
    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return arr;
}

let a = [5, 1, 2, 4, 3, 7, 6];
console.log(mergeSort(a, 0, a.length - 1));

