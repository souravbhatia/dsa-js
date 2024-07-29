//      *  
//     ***
//    *****
//   *******
//  *********


for(let i = 0; i < 5; i++) {
    let line = "";
    for(let j = 0; j < (5 - i) - 1; j++) {
        line += " ";
    }
    for(let j = 0; j < (i * 2) + 1; j++) {
        line += "*";
    }
    for(let j = 0; j < (5 - i) - 1; j++) {
        line += " ";
    }
    console.log(line);
}