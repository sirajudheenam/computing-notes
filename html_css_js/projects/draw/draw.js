const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// canvas.style.position = 'relative';
var fillStyle = "#EE0000";
var sX, sY, eX, eY;
var selectedColor = "#FFFFFF";
var selectedTool = "line";
const colors = ["#000000", "#00FF00", "#00FFFF", "#FF0000", "#FFFF00", "#FF00FF", "#FFFFFF"];
const color_name = ["white", "green", "0gb", "red", "rg0", "r0b", "black"];

function colorMenu() {
  let buttons = [];
  let elementType = 'button'
  let colorDiv = document.getElementById('colorPalletteDiv');
  let colorForm = document.createElement('form');
  for (var i = 0; i < colors.length; i++) {
    btn = document.createElement(elementType);
    btn.setAttribute("name", color_name[i]);
    // btn.setAttribute("id", "color_picker_button");
    btn.setAttribute("class", "btnClass");
    btn.style.backgroundColor = colors[i];
    txt = document.createTextNode("B");
    btn.appendChild(txt);
    colorForm.appendChild(btn);
  }
  document.body.appendChild(colorForm);
}

// function addevtListener(evt, element) {
//   elements = document.getElementsByTagName(element);
//   for (var i=0; i<=elements.length;i++) {
//     curr_element = elements[i]
//     attr = curr_element.getAttribute('name');
//     elm = document.body.getElementsByTagName(element).namedItem(attr);
//     elm.addEventListener(evt, function() {
//        selectedColor = element.getAttribute('name');
//        alert(selectedColor);
//       }, false);
//     }
//
// }


function draw(selectedTool) {
  if (selectedTool === "line") drawLine(sX, sY, eX, eY);
  if (selectedTool === "fillrect") drawRect(sX, sY, eX, eY, fillStyle);
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function (evt) {
  var mousePos = getMousePos(canvas, evt);
  console.log('move Mouse position: ' + mousePos.x + ',' + mousePos.y);
}, false);

canvas.addEventListener('mousedown', function (evt) {
  var mousePos = getMousePos(canvas, evt);
  sX = mousePos.x;
  sY = mousePos.y;
  console.log('Mouse down position: ' + mousePos.x + ',' + mousePos.y);
}, false);

canvas.addEventListener('mouseup', function (evt) {
  var mousePos = getMousePos(canvas, evt);
  eX = mousePos.x;
  eY = mousePos.y;
  draw(selectedTool);
  console.log('Mouse up position: ' + mousePos.x + ',' + mousePos.y);
  console.log('Rectangle position: ' + sX + ',' + sY + ',' + eX, ',' + eY);
}, false);

function drawCanvas() {
  y = document.getElementById('canvas').attributes.height.value;
  x = document.getElementById('canvas').attributes.width.value;
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, x, y);
}

function drawLine(sX, sY, eX, eY) {
  if (!canvas.getContext) {
    return;
  }
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(eX, eY);
  ctx.stroke();
}

function drawRect(startX, startY, endX, endY, fillStyle) {
  console.log('Rect position: ' + startX + ',' + startY + ',' + endX, ',' + endY);
  ctx.fillStyle = fillStyle;
  ctx.fillRect(startX, startY, endX, endY);
}

function clearRect(startX, startY, endX, endY) {
  clearRect(startX, startY, endX, endY);
}


// stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
// stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
// styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
// styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
// // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
// // They will mess up mouse coordinates and this fixes that
// var html = document.body.parentNode;
// htmlTop = html.offsetTop;
// htmlLeft = html.offsetLeft;

//  // Creates an object with x and y defined,
// // set to the mouse position relative to the state's canvas
// // If you wanna be super-correct this can be tricky,
// // we have to worry about padding and borders
// // takes an event and a reference to the canvas
// function getMouse = function(e, canvas) {
//   var element = canvas, offsetX = 0, offsetY = 0, mx, my;
//
//   // Compute the total offset. It's possible to cache this if you want
//   if (element.offsetParent !== undefined) {
//     do {
//       offsetX += element.offsetLeft;
//       offsetY += element.offsetTop;
//     } while ((element = element.offsetParent));
//   }
//
//   // Add padding and border style widths to offset
//   // Also add the <html> offsets in case there's a position:fixed bar (like the stumbleupon bar)
//   // This part is not strictly necessary, it depends on your styling
//   offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
//   offsetY += stylePaddingTop + styleBorderTop + htmlTop;
//
//   mx = e.pageX - offsetX;
//   my = e.pageY - offsetY;
//
//   // We return a simple javascript object with x and y defined
//   return {x: mx, y: my};
// }

drawCanvas();
// drawLine();
// drawRect(200, 200, 340, 340, fillStyle);
colorMenu();
// addevtListener('click', 'button');
