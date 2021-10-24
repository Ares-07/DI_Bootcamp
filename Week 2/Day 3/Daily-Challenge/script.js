let x = ""
for (let i = 1; i < 6; i++){
    for (let y = 0; y < i; y++){
        x += "*";
    }
    x += "\n";
}
console.log(x);
