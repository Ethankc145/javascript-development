//Seventh Task Loop
let char = ""
for (let index = 1; index <= 6; index++) {
    for (indexTwo = 1; indexTwo < index; indexTwo++) {
      char += "*"
    }
    if (index == 1) continue;
    console.log(char);
    char = ""
}