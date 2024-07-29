function sumOfFirstNnumbersParameterizedRec (n, sum) {
    if(n > 0) {
        sum += n;
        sumOfFirstNnumbersParameterizedRec(n - 1, sum);
    } else {
        console.log(sum);
    }
}

sumOfFirstNnumbersParameterizedRec(3, 0);