function numberOfTimesCharOccurs (str) {
    let arr = new Array(26).fill(0);
    for(let s = 0; s < str.length; s ++) {
        arr[str.charCodeAt(s) - 'a'.charCodeAt(0)] ++;
    }

    return arr;
}

console.log(numberOfTimesCharOccurs("aaabbbzzzxx"));