// let myDate = new Date()

// console.log(myDate); // 2023-11-01T13:38:50.082Z
// console.log(myDate.toString()); // "Wed Nov 01 2023 19:08:50 GMT+0530 (India Standard Time)"
// console.log(myDate.toDateString()); // "Wed Nov 01 2023"
// console.log(myDate.toISOString()); // "2023-11-01T13:38:50.082Z"
// console.log(myDate.toTimeString()); // "19:08:50 GMT+0530 (India Standard Time)"
// console.log(myDate.toJSON()); // "2023-11-01T13:38:50.082Z"
// console.log(myDate.toLocaleDateString()); // "11/1/2023"
// console.log(myDate.toLocaleDateString("en-IN")); // "1/11/2023"
// console.log(myDate.toLocaleString()); // "11/1/2023, 7:08:50 PM"
// console.log(myDate.toLocaleTimeString()); // 7:26:42 PM
// console.log(myDate.valueOf()); // in ms


// console.log(Date.now()); // in ms
// console.log(Math.floor(Date.now()/(1000*60*60*24*365))); // in years // 53

// console.log(myDate.getDate()); // 1 (1 Nov)
// console.log(myDate.getDay()); // 3 (Wednesday)
// console.log(myDate.getFullYear()); // 2023
// console.log(myDate.getHours()); // 12 (12 PM)
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes()); // 17 // 12:17 PM
// console.log(myDate.getMonth()); // 10 (November) // starts from 0
// console.log(myDate.getSeconds());
// console.log(myDate.getTime()); // in ms
// console.log(Math.floor((myDate.getTime())/1000)); // in seconds
// console.log(Math.floor(myDate.getTime()/60000)); // in minutes
// console.log(Math.floor(myDate.getTime()/(60000*60))); // in hours
// console.log(Math.floor(myDate.getTime()/(60000*60*24))); // in days (19662)
// console.log(Math.floor(myDate.getTime()/(60000*60*24*365))); // in years (53)
// console.log(Math.floor(myDate.getUTCDay())); // 3

// let myBirthday = new Date("Aug 20, 2004, 00:30:00")

// console.log(myBirthday); // 2004-08-19T19:00:00.000Z
// console.log(String(myBirthday)); // "Fri Aug 20 2004 00:30:00 GMT+0530 (India Standard Time)"

// console.log(myBirthday.getTime()); // in ms
// console.log(Math.floor((myBirthday.getTime())/(1000*60*60*24*365))); // in years // 34

// console.log(myBirthday.valueOf()); // in ms
// console.log(Math.floor(myBirthday.valueOf()/(1000*60*60*24*365))); // in years // 34

// // My Age ---------> 
// let TimeTillNow = Math.floor(Date.now()/(1000*60*60*24*365))
// let TimeTillMyBirthday = Math.floor((myBirthday.getTime())/(1000*60*60*24*365))
// let myAge = TimeTillNow - TimeTillMyBirthday // 53 - 34
// console.log(myAge); // 19


// console.log(myBirthday.getDate()); // 20
// console.log(myBirthday.getDay()); // 5 (Friday)
// console.log(myBirthday.getFullYear()); // 2004
// console.log(myBirthday.getHours()); // 0 (12 AM)
// console.log(myBirthday.getMilliseconds()); // 0
// console.log(myBirthday.getMinutes()); // 30
// console.log(myBirthday.getMonth()); // 7 (August) // starts from 0
// console.log(myBirthday.getSeconds()); // 0
// console.log(Math.floor(myBirthday.getTime()/1000)); // in seconds
// console.log(Date.parse(myBirthday)); // in ms


// console.log(myBirthday.setDate(25));
// console.log(myBirthday.getDate()); // 25
// console.log(myBirthday.setFullYear(2023));
// console.log(myBirthday.getFullYear()); // 2023
// console.log(myBirthday.setMinutes(35));
// console.log(myBirthday.getMinutes()); // 35
// console.log(myBirthday.toString()); /* "Fri Aug 25 2023 00:35:00 GMT+0530 (India Standard Time)"
// my birthday has been changed because it's an object (non-primitive) */




// MY AGE ----------------------------> 

const myBirthday = new Date("20 Aug, 2004")

const TimeTillNow = Math.floor(Date.now()/(1000 * 60 * 60 * 24 * 365)) // 53 // in years

const TimeTillMyBirthday = Math.floor(myBirthday.getTime()/(1000 * 60 * 60 * 24 * 365)) // 34 // in years

const myAge = TimeTillNow - TimeTillMyBirthday // 53 - 34

console.log(myAge); // 19







