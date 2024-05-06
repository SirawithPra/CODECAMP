const fs = require('fs');

//Asynchronously reads the entire contents of a file.
fs.readFile('./Readme.txt', (err, data) => {
    if (err) {
        console.log(err); 
    } else {
        console.log(data.toString());
    }
});
//ถ้าเกิด error ขึ้นขณะอ่านไฟล์ โค้ดจะแสดงข้อความ error ที่เกิดขึ้นด้วย console.log(err) 
//แต่ถ้าไม่เกิด error จะแสดงข้อมูลที่อ่านได้ด้วย console.log(data.toString()).

fs.readFile('./Readme.txt', (err2, data2) => {
    if (err2) throw err2
       console.log(data2.toString());
});
//ถ้าเกิด error ขึ้นขณะอ่านไฟล์ โค้ดจะโยน error ที่เกิดขึ้นด้วย throw err2 
// **ซึ่งจะทำให้โปรแกรมหยุดทำงาน**  โดยไม่ได้แสดงข้อความ error ใดๆ ใน console 
//หากไม่เกิด error จะแสดงข้อมูลที่อ่านได้ด้วย console.log(data2.toString()).


console.log('Loading Readme.txt');
//คำสั่งแรกจะแสดง error ใน console ในขณะที่คำสั่งที่สองจะโยน error นั้นออกมาและหยุดทำงานโปรแกรมทันที โดยไม่แสดง error ใดๆ ใน console ถ้าเกิด error ขึ้น