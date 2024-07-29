// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


for(let i = 0; i < 9; i++) {
    let line = "";
    if(i < 5) {
        for(let j = 0; j <= i; j++) {
            line += "* ";
        }
    } 
    else {
        for(let j = 0; j < 9 - i; j ++) {
            line += "* ";
        }
        
    }
    console.log(line);
}