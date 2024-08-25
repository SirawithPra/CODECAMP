# js-lab-46
### Lab46 Loop: Lab7 (Optional)
ให้เขียนฟังก์ชันชื่อ findPrimeNumbers ที่รับเลขจำนวนเต็มสองตัว start และ end และให้ฟังก์ชันคืนค่าลิสต์ของเลขจำนวนเฉพาะ (Prime Numbers) ที่อยู่ในช่วงตั้งแต่ start ถึง end (รวม start และ end ด้วยถ้าเป็นจำนวนเฉพาะ)
เงื่อนไข:
1.ตัวเลข start และ end เป็นจำนวนเต็มบวก (start > 0, end > 0) และ start <= end
2.ถ้าในช่วงนั้นไม่มีจำนวนเฉพาะ ให้คืนค่าลิสต์ว่าง

```Javascript
  function findPrimeNumbers(start, end) {
    function isPrime(num) {
        // TODO
        return true;
    }

    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        // TODO
    }
    return primeNumbers;
  }

  // ทดสอบการทำงานของฟังก์ชัน
  console.log(findPrimeNumbers(10, 30)); // Output: [11, 13, 17, 19, 23, 29]
  console.log(findPrimeNumbers(1, 10)); // Output: [2, 3, 5, 7]
  console.log(findPrimeNumbers(15, 17)); // Output: [17]"
```
- ศิรวิชญ์ ประสิทธิเวชานนท์ (เอม)
