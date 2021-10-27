// Daily Challenge: Stars

let str = "abc".repeat(6);
console.log(str);


// Method 1

for (var = 1; i < 6; i++) {
    let str = "*".repeat(i+1)
    console.log(str)
}


// method 2 = nested loop



let x = ""
for (let i = 1; i < 6; i++){
    for (let y = 0; y < i; y++){
        x += "*";
    }
    x += "\n";
}
console.log(x);


// Daily Challenge GOLD: Bubble Sort

let arr = [5,0,9,1,7,4,2,6,3,8];
console.log (arr)


for(let i = 0; i<arr.length; i++){
    // console.log(arr[i]);
    for (let j=0; j<arr.length; j++){
        if (arr[i] < arr[j]){
            let temp = arr[i];
            arr [i] = arr[j]
            arr[j] = temp;
        }
    }
}
console.log(arr)