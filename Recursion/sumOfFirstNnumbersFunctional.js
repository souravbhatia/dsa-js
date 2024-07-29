function sumOfFirstNnumbersFunctional (n) {
    if(n == 0) return 0;
    return n + sumOfFirstNnumbersFunctional(n - 1);
}

let res = sumOfFirstNnumbersFunctional(5);
console.log(res);