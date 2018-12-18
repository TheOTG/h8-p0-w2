// 1. Menyusun Barisan Bintang

var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(var i = 0 ; i < rows1; i++) {
    console.log("*");
}
console.log();


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 4; // input the number of rows

// do loops to display asterisks in the console.
for(var i = 0; i < rows2; i++) {
    var temp = "";
    for(var j = 0; j < rows2; j++) {
        temp += "*";
    }
    console.log(temp);
}
console.log();


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(var i = 0; i < rows3; i++) {
    var temp = "";
    for(var j = 0; j < i+1; j++) {
        temp += "*";
    }
    console.log(temp);
}

