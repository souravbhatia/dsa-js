function printLinearly1ToN(i, n) {
    if(i <= n) {
        console.log(i);
        i ++;
        printLinearly1ToN(i, n)
    }
}

printLinearly1ToN(1, 10)