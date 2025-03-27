/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    let str = equation.toString();
    
    if(str.length === 1) {
      return str;
    }

    let firstDigit = str[0];
    let nol = '0'.repeat(str.length - 1);
    let curent = firstDigit + nol;
    let remain = parseInt(str.slice(1), 10);

    if(remain === 0 ) {
      return curent
    }

    return `${curent} + ${parseNumber(remain)}`
  };
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3