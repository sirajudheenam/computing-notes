// const moment = require("moment");
// const fetch = require("node-fetch");
const nums = [10, 20, 33, 17, 4, 38]; /*? */
const sum = nums.reduce((acc, curVal) => acc + curVal); //?
const over = nums.filter((num) => num < 21);

const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log(data);
};

getUser(2);

console.log(sum);
console.log(over);
