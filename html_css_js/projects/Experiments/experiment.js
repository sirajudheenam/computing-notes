// Alternative to load event
document.onreadystatechange = () => {
    console.log("Content is loading...")
    // if (document.readyState === "complete") {
    //   console.log("Content is loaded")
    // }
    // console.log(MediaDevices.length)

    let name = "Siraj";

let item = document.querySelector('div.cell.top')
console.log(item);
console.log(item.innerHTML)
// item.setAttribute(innerHTML, myProp);

    console.log(navigator.pdfViewerEnabled)
    if (!navigator.mediaDevices.selectAudioOutput) {
        console.log("selectAudioOutput() not supported or not in secure context.");
        return;
      }
      

  };