
// 1. Listening for DOMContentLoaded
// Short version

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('DOM is ready.');
});

// Expanded function 

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('country').addEventListener("change", function () {
    console.log("Selected Country is : " + this.value);
  });
});

// 2. Using onreadystatechange

// 'loading' — the document is still loading
//'interactive' — the document has been parsed and has finished loading, but sub-resources such as images, stylesheets and frames are still loading
// 'complete' — the document and all sub-resources have finished loading, and the load event is about to fire

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('DOM is ready.')
  }
};

// 3. Using JavaScript Timer

var checkReadyState = setInterval(() => {
  if (document.readyState === "interactive") {
    clearInterval(checkReadyState)
    console.log('DOM is ready.')
  }
}, 100)
