function frequencyCount(arr,N,P) {
    //code here
    let ar = new Array(N).fill(0)
    for(let i = 0; i < N; i++) {
        ar[arr[i] - 1]++;
    }
    console.log(arr);

    for(let i = 0; i < N; i++) {
        arr[i] = ar[i];
    }
    console.log(arr);
}

 let n = 5;
 let arr = [2, 3, 2, 3, 5];
 let p = 5;
//  output: 0 2 2 0 1
 frequencyCount(arr, n, p);
