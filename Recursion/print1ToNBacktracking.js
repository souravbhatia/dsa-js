function print1ToNBacktracking (n, i) {
    if(i > 0) {
       i --;
       print1ToNBacktracking(n, i);
       console.log(i + 1);
    }
}

print1ToNBacktracking(10, 10);