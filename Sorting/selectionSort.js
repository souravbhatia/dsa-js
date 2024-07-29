function sSort(arr) {

    for(let i = 0; i < arr.length - 2; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length - 1; j ++) {
            if(arr[j] < arr[min]) min = j;
        }
        swap(arr, i, min);
    }
    console.log(arr);
}

function swap (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

sSort([3, 1, 2, 7, 5, 6]);