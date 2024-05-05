//Date

let mydate = new Date()

// console.log(myDate);

// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());

// Month count started from 0 ***
let newDate = new Date(2024 , 4 , 5 , 1 , 17)
// console.log(newDate.toDateString());

// console.log(newDate.toLocaleDateString());

let newdatetype = new Date("2023-05-05")  // yy-mm-dd formate here month count start from 1
let newdatetype2 = new Date("05-05-2024")  // dd-mm-yy formate here month count start from 1
// console.log(newdatetype.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(newdatetype.getTime());

let datetoday = new Date()
console.log(datetoday.toLocaleString('default',{
day: 'numeric'
}));
