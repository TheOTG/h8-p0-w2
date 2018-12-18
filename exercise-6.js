// 1. Melakukan Looping Menggunakan While

var num = 0;

console.log("LOOPING PERTAMA");
while(num < 20) {
    num += 2;
    console.log(num + " - " + "I love coding");
}

console.log("LOOPING KEDUA");
while(num > 0) {
    console.log(num + " - " + "I will become a fullstack developer");
    num -= 2;
}

console.log();

// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for(var i = 1; i <= 20; i++) {
    console.log(i + " - " + "I love coding");
}

console.log("LOOPING KEDUA");
for(var i = 20; i > 0; i--) {
    console.log(i + " - " + "I will become a fullstack developer");
}
console.log();


// 3. Angka Ganjil dan Genap

// ganjil genap
for(var i = 1; i <= 100; i++) {
    if(i%2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}
console.log();

// kelipatan 3 pertambahan counter 2
for(var i = 1; i <= 100; i += 2) {
    if(i%3 === 0) {
        console.log(i + " KELIPATAN 3");
    }
}
console.log();

// kelipatan 6 pertambahan counter 5
for(var i = 1; i <= 100; i += 5) {
    if(i%6 === 0) {
        console.log(i + " KELIPATAN 6");
    }
}
console.log();

// kelipatan 10 pertambahan counter 9
for(var i = 1; i <= 100; i += 9) {
    if(i%10 === 0) {
        console.log(i + " KELIPATAN 10");
    }
}

