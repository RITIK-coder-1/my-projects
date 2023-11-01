let myDate = new Date()

console.log(myDate); // 2023-11-01T06:26:22.466Z
console.log(myDate.toString()); // Wed Nov 01 2023 11:57:00 GMT+0530 (India Standard Time)

console.log(myDate.getDate()); // 1 (1 Nov)
console.log(myDate.getDay()); // 3 (Wednesday)
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getHours()); // 12 (12 PM)
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes()); // 17 // 12:17 PM
console.log(myDate.getMonth()); // 10 (November) // starts from 0
console.log(myDate.getSeconds());
console.log(myDate.getTime());

let myBirthday = new Date("August 20, 2004, 00:30:00")

console.log(myBirthday); // 2004-08-19T19:00:00.000Z
console.log(String(myBirthday)); // Fri Aug 20 2004 00:30:00 GMT+0530 (India Standard Time)

console.log(myBirthday.getDate()); // 20
console.log(myBirthday.getDay()); // 5 (Friday)
console.log(myBirthday.getFullYear()); // 2004
console.log(myBirthday.getHours()); // 0 (12 AM)
console.log(myBirthday.getMilliseconds()); // 0
console.log(myBirthday.getMinutes()); // 30
console.log(myBirthday.getMonth()); // 7 (August) // starts from 0
console.log(myBirthday.getSeconds()); // 0
console.log(myBirthday.getTime());