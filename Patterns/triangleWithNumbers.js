//     1
//    2 2
//   3 3 3 
//  4 4 4 4
// 5 5 5 5 5


for(let i = 0; i < 5; i++) {
    let line = "";
    for(let j = 0; j < ((5 - i) - 1) * 2; j++) {
        line += " ";
    }
    for(let j = 0; j <= i; j++) {
        line += (j + 1) + " ";
    }
    for(let j = 0; j < ((5 - i) - 1) * 2; j++) {
        line += " ";
    }
    console.log(line);
}