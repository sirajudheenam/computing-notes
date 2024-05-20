const quote = require('quote');
/* https://crockford.com/javascript/remedial.html */
/*
if (!String.prototype.entityify) {
  String.prototype.entityify = function () {
    return this.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };
}

if (!String.prototype.quote) {
  String.prototype.quote = function () {
    var c,
      i,
      l = this.length,
      o = '"';
    for (i = 0; i < l; i += 1) {
      c = this.charAt(i);
      if (c >= " ") {
        if (c === "\\" || c === '"') {
          o += "\\";
        }
        o += c;
      } else {
        switch (c) {
          case "\b":
            o += "\\b";
            break;
          case "\f":
            o += "\\f";
            break;
          case "\n":
            o += "\\n";
            break;
          case "\r":
            o += "\\r";
            break;
          case "\t":
            o += "\\t";
            break;
          default:
            c = c.charCodeAt();
            o +=
              "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
        }
      }
    }
    return o + '"';
  };
}

if (!String.prototype.supplant) {
  String.prototype.supplant = function (o) {
    return this.replace(/\{([^{}]*)\}/g, function (a, b) {
      var r = o[b];
      return typeof r === "string" || typeof r === "number" ? r : a;
    });
  };
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
  };
}
/* https://crockford.com/javascript/remedial.html */

const data = {
  DedicatedIpAutoWarmupEnabled: true,
  Details: {
    AdditionalContactEmailAddresses: '<sensitive>',
    ContactLanguage: 'EN',
    MailType: 'TRANSACTIONAL',
    ReviewDetails: {
      CaseId: '8148802141',
      Status: 'GRANTED',
    },
    UseCaseDescription: '<sensitive>',
    WebsiteURL: '<sensitive>',
  },
  EnforcementStatus: 'HEALTHY',
  ProductionAccessEnabled: true,
  SendQuota: {
    Max24HourSend: 50000,
    MaxSendRate: 14,
    SentLast24Hours: 0,
  },
  SendingEnabled: true,
  SuppressionAttributes: {
    SuppressedReasons: ['COMPLAINT'],
  },
};

function typeOf(value) {
  var s = typeof value;
  if (s === 'object') {
    if (value) {
      if (Object.prototype.toString.call(value) == '[object Array]') {
        s = 'array';
      }
    } else {
      s = 'null';
    }
  }
  return s;
}
function isEmpty(o) {
  var i, v;
  if (typeOf(o) === 'object') {
    for (i in o) {
      v = o[i];
      if (v !== undefined && typeOf(v) !== 'function') {
        return false;
      }
    }
  }
  return true;
}
function checkObjectType(obj) {
  if (obj !== 'object') {
    return 'not an object';
  }
  let o;
  for (o in obj) {
    if (obj.hasOwnProperty(o)) {
      switch (typeof obj[o]) {
        case 'object':
          if (obj[o] === null) {
            return 'null';
          } else {
            if (obj[o].constructor.name === 'Array') {
              return 'Array';
            } else {
              return 'neither null nor Array ';
            }
          }
        case 'function':
          return 'function';
        case 'string':
          return 'string';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        default:
          return 'peculier type';
      }
    }
  }
}

// function destructureHash(rawdata) {
//   Object.keys(rawdata).forEach(function eachKey(topKey) {
//     if (typeof rawdata[topKey] === "object") {
//       const innerKey = rawdata[topKey];
//       // destructureHash(innerKey);
//       Object.keys(innerKey).forEach(function eachKey(key) {
//         // console.log(`innerKeyObjectNAme: ${innerKey}`);
//         // console.log(`innerKey: ${key}`);
//         // console.log(`innerValue: ${innerKey[key]}`);
//         const des = destructureHash(innerKey);
//         if (typeof des === "object") {
//           destructureHash(innerKey);
//         }
//       });
//     }

//     // console.log(`type: ${typeof rawdata[topKey]}`);
//   });
// }
// destructureHash(data);
const jsonData = JSON.stringify(data);
console.log(`jsonData.constructor.name: ${jsonData.constructor.name}`);
const parsedJson = JSON.parse(jsonData);
// console.log(parsedJson);
let arr = [];
let toplevel, innerKeys;
let tempObj = {};
const keys = Object.keys(parsedJson);
keys.forEach((key) => {
  toplevel = parsedJson[key];
  if (typeof toplevel !== 'object') {
    let quotedKey = quote(key);
    tempObj = { [quotedKey]: parsedJson[key] };
    arr.push(tempObj);
  } else {
    innerKeys = Object.keys(toplevel);
    innerKeys.forEach((innerKey) => {
      let quotedKey = quote(innerKey);
      if (typeof innerKeys[innerKey] !== 'object') {
        tempObj = { [quotedKey]: toplevel[innerKey] };
        arr.push(tempObj);
      }
    });
  }
});
console.log(arr);
// console.log(Object.keys(parsedJson));

// function json2array(parsedJson) {
//   let result = [];
//   const keys = Object.keys(parsedJson);
//   keys.forEach(function (key) {
//     result.push(parsedJson[key]);
//   });
//   return result;
// }
// console.log(json2array(parsedJson));

// const entries = Object.entries(parsedJson);
// console.log(entries);

// console.log(Object.length);
// console.log(parsedJson.DedicatedIpAutoWarmupEnabled);
// let awsAccountInfo = [];
// for (var key in parsedJson) {
//   awsAccountInfo.push({ `${key}`: parsedJson[key] });
//   // console.log(key);
//   // console.log(parsedJson[key]);
// }
// console.log(awsAccountInfo);
// console.log(parsedJson);
// console.log(typeof parsedJson);
// console.log(typeOf(parsedJson));
// console.log(isEmpty(parsedJson));
// console.log(Object.prototype.toString.call(parsedJson));
// console.log(Object.prototype.toString.call([parsedJson, jsonData]));
// console.log(checkObjectType("String"));
// console.log(checkObjectType(true));
// console.log(checkObjectType(100));
// typeof "Tamal";
// typeof 100;
// typeof true;
// typeof false;
// typeof undefined;
// typeof function () {};
// typeof Symbol();
// typeof { name: "Tamal" };
// typeof [1, 2, 3];
// typeof /^/;
// typeof NaN;
// typeof null;

// const keys = Object.keys(parsedJson);
// const values = Object.values(parsedJson);
// console.log(keys);
// console.log(values);
// keys.forEach((v, i, a) => {
//   console.log(v, i);
// });

// console.log(Object.entries(parsedJson));
