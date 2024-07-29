// * * * * * 5 - 0      ->      
// * * * *   5 - 1      ->      
// * * *     5 - 2      ->      
// * *       5 - 3      ->      
// *         5 - 4      ->      
for(let i = 0; i < 5; i++) {
    let line = "";
    for(let j = 5 - i; j > 0; j --) {
        line += "* ";
    }
    console.log(line);
}