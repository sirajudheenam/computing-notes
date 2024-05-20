// let Time = require('time');

var moment = require('moment');
let seconds = 1799;
let currentTime = moment().format('yyyy-MM-DD:hh:mm:ss');
let dt = new Date();
console.log('new Date();', dt);
// dt.format('DD-MM-YYYY-HH-MM-SS');
// console.log(dt.toLocaleDateString());
console.log('Day', dt.getDay());
console.log('Date', dt.getDate());
console.log('Month', dt.getMonth());
console.log('FullYear', dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

// let dtt = new Date(dt.setSeconds(dt.getSeconds() + 1799));

console.log(dt);
// console.log(currentTime + 1799);
