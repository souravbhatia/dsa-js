function f1(cnt) {
    if(cnt < 5) {
        console.log("Inside f1", cnt + 1);
        cnt ++;
        f1(cnt);
    }
}

f1(0);