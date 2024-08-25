const user = {
  email: "cc@gmail.com",
  isActive: true,
};

user.isActive = false;
console.log(user); // *
// { email: 'cc@gmail.com', isActive: false }
//propertie isActive  ถูกแก้ไข ซึ่งสามารถทำได้แม้จะถูกประกาศ Obj เป็น const เนื่องจากไม่ได้มีการเปลี่ยนแปลง obj ที่ไป (ชี้ไปที่ Obj เดิม)

user = {};
console.log(user); // **
//TypeError: Attempted to assign to readonly property.
// เนื่องจากมีการชี้ไปที่ Obj ใหม่ ซึ่งการประกาศเป็น const ไม่สามารถย้ายได้