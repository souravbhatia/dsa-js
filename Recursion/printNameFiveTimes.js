function printNameFiveTimes(n, name, i) {
    if(i < n) {
        i ++;
        console.log(name);
        printNameFiveTimes(n, "Sourav", i);
    }
}

printNameFiveTimes(5, "Sourav", 0);