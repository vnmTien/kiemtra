// Bai 1:
function tinhTong() {
    const a = parseInt(document.getElementById("na").value);
    const b = parseInt(document.getElementById("nb").value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (soNguyenDuong(i)) {  
        sum += i;
      }
    }
    document.getElementById("ketqua").innerHTML = `Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}`;
  }
  
  function soNguyenDuong(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

// Bai 2:
function numberOneTritangle(n) {
    for (let i = 1; i <= n; i++) {
        let total = '';
        for (let x = 1; x <= i; x++) {
        total += '*'
        }
        console.log(total);
    }
}

numberOneTritangle(6);