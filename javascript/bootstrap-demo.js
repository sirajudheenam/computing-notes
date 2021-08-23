$(document).ready(function() {
  changeStyle('.mydiv', "background-color", "yellow");  
  eventClickActionToggle('#first-container','.row');
  eventClickActionToggle('#toggleBtn','#btn-form');
  eventClickActionToggle('#toggleTxtBox','#txtbox-form');
  eventClickActionToggle('#toggleChkBox','#chkbox-form');
});

function changeStyle(element, styleType, styleValue) {
  $(element).css(styleType,styleValue);
}
function toggleElement(element) {
  $(element).toggle();
}
function eventClickActionToggle(clkElement,tglElement) {
  $(clkElement).click(function(){
    toggleElement(tglElement);
  });
}

// const email = document.querySelector('input[name=email]');
// const button = document.querySelector('#btn');
// const text =  document.querySelector('#message');

// button.addEventListener('click',()=>{
//   if(validateEmail(email.value)){
//     text.innerText="Valid email";
//   }else{
//     text.innerText="Invalid email";
//   }
// })




