var isVisible = $( "#myDiv" ).is( ":visible" );
var isHidden = $( "#myDiv" ).is( ":hidden" );
let element;

const initialize = function() {
  const reset_btn = "<button id='reset-btn'>Reset</button>";
  const tools_animate_btn = "<button id='tools-animate-btn'>Animate</button>";
  const random_color_btn = "<button id='random-color-btn'>Random Color</button>";
  var tools_container = $('.tools-container');
  // tools_container.text("Tool Box");
  tools_container.append(reset_btn);
  $('#reset-btn').css({ "background-color": "orange",
                        "border-radius": "1rem",
                        "width" : "10rem"});
  tools_container.append(tools_animate_btn);
  $('#tools-animate-btn').css({ "background-color": "orange",
                        "border-radius": "1rem",
                        "width" : "10rem"});
  tools_container.append(random_color_btn);
  $('#random-color-btn').css({ "background-color": "orange",
                        "border-radius": "1rem",
                        "width" : "11rem"});
}

// Generate Random Color
var letters = "0123456789ABCDEF";
var color = '#';
const getRandomColor = function() {
  color = "#";
  for (var i = 0; i < 6; i++)
     color += letters[(Math.floor(Math.random() * 16))];
     return color;
}


const applyRandomColor = function() {
  $(".top-container").css("background-color", `${getRandomColor()}`);
  $(".first-container").css("background-color", `${getRandomColor()}`);
  $(".box-sizing-container").css("background-color" ,`${getRandomColor()}`);
  $(".tools-container").css("background-color" ,`${getRandomColor()}`);
  $("#box-sizing-container-01").css("background-color" ,`${getRandomColor()}`);
  $("#box-sizing-container-02").css("background-color" ,`${getRandomColor()}`);
  $("#box-sizing-container-03").css("background-color" ,`${getRandomColor()}`);
  $(".parent").css("background-color" ,`${getRandomColor()}`);
  $(".child").css("background-color" ,`${getRandomColor()}`);
  $(".flexbox-container").css("background-color" ,`${getRandomColor()}`);
  $(".fl").css("background-color" ,`${getRandomColor()}`);
  $(".flexbox-container-01").css("background-color" ,`${getRandomColor()}`);
  $(".flexbox-container-02").css("background-color" ,`${getRandomColor()}`);
  $(".flexbox-container-03").css("background-color" ,`${getRandomColor()}`);
  $(".flexbox-container-04").css("background-color" ,`${getRandomColor()}`);

  for (var i = 1; i<5; i++ )
    for (var j = 1; j<4; j++ ){
      element = `fl--0${i}--0${j}`;
      $(`.${element}`).css("background-color" ,`${getRandomColor()}`);
    }

}

$( function() {
  initialize();
  // Actions
  $('#reset-btn').click( function() {
    location.reload();
  });
  $('#random-color-btn').click(applyRandomColor);
  // Animation
  $('#tools-animate-btn').click(function(){
    $( "#tools-container:visible" ).animate({
        width: "10%",
        opacity: 0.8,
        borderWidth: "0.5rem"
      }, 1500 );
  });
  $('#tools-container').css({ "background-color": `${color}`});



});

// color-hex.com
var colors = ["#00004c",
"#cbc3cf",
"#c7cfc3",
"#5baddf",
"#ff80ed",
"#fcd612",
"#d61a1f",
"#ffffff",
"#0000ff",
"#000000",
"#ab5dee",
"#1ddd33",
"#a8e6cf",
"#00ffcf",
"#275bb2",
"#ff9f8e",
"#00602d",
"#218732",
"#ffd697",
"#fea5ad",
"#b00b69",
"#bada55",
"#696969",
"#594343",
"#301515",
"#793636",
"#580505",
"#b10b0b",
"#c90d0d",
"#96ddff",
"#ffc0cb",
"#b3d9e5",
"#c0c0c0",
"#d9e7e2",
"#065535",
"#ffc0cb",
"#014421",
"#000000",
"#052403",
"#042707",
"#081004",
"#240305"];

for (var i = 0; i < colors.length; i++)
  console.log(colors[i]);
