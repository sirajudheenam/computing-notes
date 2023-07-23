
let isClicked = 0;
let isDoubleClicked = 0;
let initialArray = []
let totalIndex  = 10
let finalArray = []
let firstBgColor = "#b3005e";
let firstColor = "#fdebed";
let secondBgColor = "#da000e";
let secondColor = "#fde00d";


function initiateArray() {
  // To select the container of the button element
  container = document.getElementById("container");

  for (let i = 0; i < totalIndex; i++) {
    initialArray[i] = i;
    console.log("i is : " + i);
    // To create a button and populate Values
    btn = document.createElement("button");
    // Add attributes for buttons
    btn.setAttribute("class", "myBtn");
    btn.setAttribute("id", `btn_${i}`);
    // console.log( "Button ID is : " + btn.getAttribute("id"));
    current_btn_id = btn.getAttribute("id");
    btn.innerHTML = i ;
    container.appendChild(btn);
  };
  // Add event Listener
  for (let i = 0; i < totalIndex; i++) {
    document.getElementById(`btn_${i}`).addEventListener("click", customEventListener);
  }
}

function customEventListener(event){

  currentBtnId = event.target.id;
  valueToAdd = document.getElementById(currentBtnId).innerHTML;

  currentBgColor = document.getElementById(currentBtnId).style.backgroundColor;
  currentColor = document.getElementById(currentBtnId).style.color;
  if (parseColor(currentBgColor) == secondBgColor || "#000000" ) {
    document.getElementById(currentBtnId).style.backgroundColor = firstBgColor;
    document.getElementById(currentBtnId).style.color = firstColor;
  } 
  if ( parseColor(currentBgColor) == firstBgColor ) {
    document.getElementById(currentBtnId).style.backgroundColor = secondBgColor;
    document.getElementById(currentBtnId).style.color = secondColor;
  }
    // find if the element is part of our finalArray 
    const elementFound = finalArray.find(element => element == valueToAdd);
    // Add element to finalArray only if it is unique 
    if (elementFound) {
      console.log("ELEMENT ALREADY ADDED");
    } else {
      finalArray.push(valueToAdd);
    }
    console.log(valueToAdd);

  console.log("InnerHTML: "+valueToAdd);
  console.log("finalArray: "+finalArray);
  // Use local storage to add items
  localStorage.setItem("finalArray", finalArray);
  console.log("localStorage.getItem('finalArray'): "+ localStorage.getItem("finalArray"));
}


function parseColor(color) {
  var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
  // return {
  //     hex: "#" + arr.slice(0, 3).map(toHex).join(""),
  //     opacity: arr.length == 4 ? arr[3] : 1
  // };
  return "#" + arr.slice(0, 3).map(toHex).join("");
}

function toHex(int) {
  var hex = int.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function populateButtons() {
  initiateArray();

  // customEventListener();
}

// function fun1() {
//   for (let i = 0; i < arr.length; i++) {
//     // To have a color after we click the button
//     btn.addEventListener("click", function () {
//       flag++;
//       console.log(flag);
//       if (flag == 1) {
//         this.style.backgroundColor = "#b3005e";
//         this.style.color = "#fdebed";
//       } else if (flag == 2) {
//         var value = parseInt(this.innerHTML);
//         ar2.push(value);
//         var index = arr.indexOf(value);
//         if (index !== -1) {
//           arr.splice(index, 1);
//         }

//         this.remove();
//       }
      
//     });
//     add.appendChild(btn);

//   }
// }

// function fun2() {
//   var flag1 = 0;
//   var arrayString = JSON.stringify(ar2);

//   // Store the string in LocalStorage
//   localStorage.setItem("myArray", arrayString);

//   // var storedArrayString = localStorage.getItem("myArray");

//   // Parse the string back into an array
//   var storedArray = JSON.parse(localStorage.getItem("myArray"));

//   console.log(storedArray);
//   // To add a button according to size of the array
//   //console.log(ar2);
//   for (var j = 0; j < ar2.length; j++) {
//     // To select the container of the button element
//     remove1 = document.getElementById("container2");

//     // To create a button
//     var btn2 = document.createElement("button");

//     // Add attributes for buttons
//     btn2.setAttribute("class", "btn-2");

//     // Inserting array values into buttons
//     btn2.innerHTML = ar2[j];

//     //  To have a color after we click the button
//     // btn2.addEventListener("click", function () {
//     //   this.style.backgroundColor = "#b3005e";
//     //   this.style.color = "#fdebed";
//     //   flag1++;
//     //   // console.log(flag1);
//     // });

//     btn2.addEventListener("click", function () {
//       var value = parseInt(this.innerHTML);
//       ar3.push(value);
//       var index = ar2.indexOf(value);
//       if (index !== -1) {
//         ar2.splice(index, 1);
//       }
//       this.remove();
//       console.log(ar2);
//     });
//     // var arrayString = JSON.stringify(ar2);

//     // // Store the string in local storage
//     // localStorage.setItem("ar2", arrayString);
//     // var storedArrayString = localStorage.getItem("ar2");

//     // // Convert the string back to an array
//     // var storedArray = JSON.parse(storedArrayString);

//     // console.log(storedArray);
//     // Add all buutons to the body of the container
//     remove1.appendChild(btn2);

//     // To find the error from console if we make any error in the sense
//     // console.log(btn);
//   }
// }
