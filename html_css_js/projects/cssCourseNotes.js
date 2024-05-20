// self executing function here
(function () {
  // your page initialization code here
  // the DOM will be available here
  console.log('Loaded');
  let el = (document.getElementsByClassName(
    'box-model-width-inner'
  ).style.color = 'red';
   console.log(el));
})();
