const accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

function total(arrayToCalculate = []) {
  let total = 0;
  for (let index = 0; index < arrayToCalculate.length; index++) {
    total += arrayToCalculate[index];
  }
  console.log(`array : [${arrayToCalculate}] total: ${total}`);
  return total;
}

function findLargest(arr = []) {
  let largest = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  console.log(`array values:[${arr}] - largest: ${largest}`);
}

function maximumWealth(accounts = []) {
  const accountLength = accounts.length;
  let totalArray = [];
  for (let index = 0; index < accountLength; index++) {
    totalArray.push(total(accounts[index]));
  }
  findLargest(totalArray);
}

// maximumWealth(accounts);

const multiAccounts = [
  [2, 8, 7],
  [7, 1, 3],
  [5, 2, 9, 4],
  [1, 9, 5],
  [1, 11, 5],
  [1, 10, 5],
  [5, 2, 9, 4],
];

function updateTotal(myObject) {
  console.log(Object.keys(myObject));
  console.log(Object.values(myObject));
  let largest = myObject[0].total;
  for (let k = 0; k < Object.keys(myObject).length; k++) {
    if (Object.keys(myObject)[k].total > largest) {
      console.log(myObject[k].total);
      largest = myObject[k].total;
      myObject[k].wealthy = 'yes';
    } else {
      myObject[k].wealthy = 'no';
    }
    console.log(myObject[k]);
  }
}

function findWealthy(accounts) {
  let myObject = {};
  const accountLength = accounts.length;
  for (let index = 0; index < accountLength; index++) {
    let total = 0;
    let currentArray = accounts[index];
    for (let j = 0; j < currentArray.length; j++) {
      total += currentArray[j];
      myObject[index] = {
        values: accounts[index],
        total: total,
        wealthy: '',
      };
    }
    console.log(`myObject[${index}] : ${myObject[index]}`);
    console.log(myObject[index]);
    console.log(index);
  }
  // updateTotal(myObject);
}

findWealthy(multiAccounts);
