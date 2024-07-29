// Take  the element and place it in its order

function iSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let j = i;
        while(j > 0 && arr[j - 1] > arr[j]) {
            // swap
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }

    console.log(arr);
}

iSort([4, 1, 3, 2, 7, 6, 5]);