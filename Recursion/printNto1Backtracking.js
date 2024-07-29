function printNto1Backtracking (n, i) {
    if(i <= n) {
        i ++;
        printNto1Backtracking(n, i);
        console.log(i - 1);
    }
}

printNto1Backtracking(10, 1);