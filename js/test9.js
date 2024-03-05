let my_date = new Date()

console.log(my_date);//2024-02-20T08:01:05.451Z
console.log(`1 : ${my_date.toString()}`);//1 : Tue Feb 20 2024 13:31:05 GMT+0530 (India Standard Time)
console.log(`2 : ${my_date.toISOString()}`);//2 : 2024-02-20T08:01:05.451Z
console.log(`3 : ${my_date.toUTCString()}`);//3 : Tue, 20 Feb 2024 08:01:05 GMT
console.log(`4 : ${my_date.toDateString()}`);//4 : Tue Feb 20 2024
console.log(`5 : ${my_date.toJSON()}`);//5 : 2024-02-20T08:01:05.451Z
console.log(`6 : ${my_date.toLocaleString()}`);//6 : 20/2/2024, 1:31:05 pm
console.log(`7 : ${my_date.toLocaleTimeString()}`);//7 : 1:31:05 pm
console.log();
// console.log(typeof my_date);

// console.log();
// let my_created_date = new Date(2023, 0, 23);
// let my_created_date = new Date(2023, 0, 23, 4, 3);
// let my_created_date = new Date("01-14-2023");
// console.log(my_created_date.toLocaleString());

// let my_time_stamp = Date.now();
// console.log(my_time_stamp);
// console.log(my_created_date.getTime());
// console.log();
// console.log(Math.floor(Date.now() / 1000));

// let new_date = new Date();
// // console.log(new_date);
// // console.log(new_date.getDay());
// // console.log(new_date.getTimezoneOffset());
// console.log(new_date.toLocaleString("default", {
//     weekday: "short"
// })
// )