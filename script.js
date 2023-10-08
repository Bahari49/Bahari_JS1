
// if, else, & nested if:

let angka = 15;

if (angka % 2 === 0) {
  console.log("Angka ini genap");
} else {
  console.log("Angka ini ganjil");
}

// Contoh nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else {
  console.log("D");
}


// if, else, & nested if end





// switch case

let buah = "apel";

switch (buah) {
  case "apel":
    console.log("Ini adalah buah apel");
    break;
  case "mangga":
    console.log("Ini adalah buah mangga");
    break;
  case "pisang":
    console.log("Ini adalah buah pisang");
    break;
  default:
    console.log("Ini bukan buah yang dikenal");
}

// switch case end



// for steatment

for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }
  
// for steatment end


// while, do while

let counter = 0;

while (counter < 3) {
  console.log("Nilai counter: " + counter);
  counter++;
}

let j = 10;

do {
  console.log("Iterasi ke-" + j);
  j--;
} while (j > 5);


// while, do while end


// function

function kali(a, b) {
    return a * b;
  }
  
  let hasilKali = kali(4, 7);
  console.log("Hasil perkalian: " + hasilKali);
  

// function end