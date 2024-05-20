$(document).ready(function () {
  changeStyle('.mydiv', 'background-color', 'yellow');
  eventClickActionToggle('#first-container', '.row');
  eventClickActionToggle('#toggleBtn', '#btn-form');
  eventClickActionToggle('#toggleTxtBox', '#txtbox-form');
  eventClickActionToggle('#toggleChkBox', '#chkbox-form');
});

function changeStyle(element, styleType, styleValue) {
  $(element).css(styleType, styleValue);
}
function toggleElement(element) {
  $(element).toggle();
}
function eventClickActionToggle(clkElement, tglElement) {
  $(clkElement).click(function () {
    toggleElement(tglElement);
  });
}
