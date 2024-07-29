function numberOfTimesNumOccurs (arr) {
    let m = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1)
        } else {
            m.set(arr[i], 1);
        }
    }

    return m;
}

let mRes = numberOfTimesNumOccurs([1, 3, 2, 1, 2, 5, 7, 3]);
console.log(mRes);
console.log(mRes.size);

for(let mr of mRes.entries()) {
    console.log(mr[0], "->", mr[1]);
}
// mRes.delete(3);
console.log(mRes);

console.log("sorted1:  ", new Map(Array.from(mRes).sort()));
console.log("sorted2:  ", new Map([...mRes.entries()].sort()));
console.log(mRes.entries()); // iterable object with keys and values
console.log(mRes.keys());
console.log(mRes.values());
// mRes.clear();
console.log(mRes);
