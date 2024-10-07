function quickSort(arr, low, high) {
    if(low > high) return 0;
    
    let partPoint = correctSortOrder(arr, low, high);
    quickSort(arr, low, partPoint - 1);
    quickSort(arr, partPoint + 1, high);

    return arr;
}

function correctSortOrder(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j) {
        while(arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while(arr[j] > pivot && j >= low + 1) {
            j--;
        }

        if(i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

let arr = [5, 1, 7, 2, 4, 6, 3];
console.log(quickSort(arr, 0, arr.length - 1));