let isClicked = 0;
let isDoubleClicked = 0;
let initialArray = [];
let totalIndex = 10;
let finalArray = [];
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
    btn.innerHTML = i;
    container.appendChild(btn);
  }
  // Add event Listener
  for (let i = 0; i < totalIndex; i++) {
    document
      .getElementById(`btn_${i}`)
      .addEventListener("click", customEventListener);
  }
}

function customEventListener(event) {
  currentBtnId = event.target.id;
  valueToAdd = document.getElementById(currentBtnId).innerHTML;
  // find if the element is part of our finalArray
  const elementFound = finalArray.find((element) => element == valueToAdd);

  currentBgColor = document.getElementById(currentBtnId).style.backgroundColor;
  currentColor = document.getElementById(currentBtnId).style.color;
  if (parseColor(currentBgColor) == secondBgColor || "#000000") {
    document.getElementById(currentBtnId).style.backgroundColor = firstBgColor;
    document.getElementById(currentBtnId).style.color = firstColor;
  }
  if (parseColor(currentBgColor) == firstBgColor) {
    document.getElementById(currentBtnId).style.backgroundColor = secondBgColor;
    document.getElementById(currentBtnId).style.color = secondColor;
    // Add element to finalArray only if it is unique
    if (elementFound) {
      console.log("ELEMENT ALREADY ADDED");
    } else {
      finalArray.push(valueToAdd);
    }
  }

  console.log(valueToAdd);
  console.log("InnerHTML: " + valueToAdd);
  console.log("finalArray: " + finalArray);
  // Use local storage to add items
  localStorage.setItem("finalArray", finalArray);
  console.log(
    "localStorage.getItem('finalArray'): " + localStorage.getItem("finalArray")
  );
}

function parseColor(color) {
  var arr = [];
  color.replace(/[\d+\.]+/g, function (v) {
    arr.push(parseFloat(v));
  });
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
}
