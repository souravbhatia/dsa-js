function printNto1 (n) {
    if(n > 0) {
        console.log(n);
        n --;
        printNto1(n);
    }
}

printNto1(10);