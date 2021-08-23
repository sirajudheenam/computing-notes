let element, styleType, styleValue;
let animationAdded = false;
let mainDivContent;
let animationDuration = 0;
// implicit $( document ).ready( function() {});
$( function() {
    init();

    var style = {}
      // Call init on Reset
      $('#resetButton').click(init);

      $('#toggleButton').click(function(e) {
        // Selecting a Select Option Value using ID
        if (mainDivContent) {
          $(`.${mainDivContent}`).toggle(animationDuration);
          mainDivContent = "";
        } else {
          mainDivContent = $('select#show-element').val();
          $(`.${mainDivContent}`).show(animationDuration);
        }
        // console.log(mainDivContent);
      });

      // CheckBox validation
      $('#showToolBar').change( function() {
        // console.log(mainDivContent);
        var $element = $( this );
        toolbar = $('#toolbar-Div');
        toolbar.html("<h2>Tools: </h2><ul>" + mainDivContent ? mainDivContent : "" + "</ul>");
        mainDivContent = $('select#show-element').val();
        if (mainDivContent === 'linear-gradient') {
          console.log('lg');
          toolbar.show();
          $('#tool-lg').toggle(animationDuration);

        } else if (mainDivContent === 'box-model') {
          console.log('bm');
        }
        // console.log($element.prop( "checked" ));
        // console.log($element.is( ":checked" ));

          // if ($element.prop( "checked" )) {
          //   toolbar.show();
          // } else {
          //   toolbar.hide();
          // }

        // $(".linear-gradient").children().each(function(index){
        //   console.log('Value:')
        //   console.log($(this));
        //   console.log(index);
        // });
        // htmlValue = toolbar.html();
        // console.log(htmlValue);
        // console.log($('#mainDiv'));
        // console.log(mainDivContent);
        // console.log(toolbar.html());

        // console.log($('#mainDiv').html());
      });


      $('#changeStyle').click(function (e) {
        // Selecting a Select Option Value using class
        element = $('select.element').val();
        styleType = $('select.styleType').val();
        styleValue = $('select.color').val();
        console.log(element + ":" + styleType + ":" +styleValue);
        changeStyle(element,styleType, styleValue);
      });

      $('.styleType').change(function (event) {
        if ($(this).val() === "background-color" || "color") {
          console.log("you have choosen a color");
        }

      });

      $('#showElement').change(function(e) {
        // showElement = $('select.showElement').val();
        // console.log(showElement);
        contentToDisplay = e.target.value;
        console.log(contentToDisplay);
        $(`.${contentToDisplay}`).toggle(animationDuration);
      });

      $('.lg').click(function(e) {
        target = e.target.id;
        targetID = $(`#${target}`)
        targetID.toggleClass('lg--animation');
        children = targetID.children().html();
        console.log(children);
        // if (animationAdded) {
        //   $(`#${target}`).removeClass('lg--animation');
        //   console.log(`lg--animation class is removed from : ${target}`);
        //   animationAdded = false;
        // } else {
        //   $(`#${target}`).addClass('lg--animation');
        //   console.log(`lg--animation class is added to : ${target}`);
        //   animationAdded = true;
        // }

      });


      // style = { backgroundColor: "red" , color: "blue" }
      // changeStyle( "p", style);
      // style = { "background-color": "blue" , color: "red" }
      // changeStyle( "p", style);
      //
      // $( "p" ).click(function( event ) {
      //     alert( "Thanks for visiting!" );
      // });
      // $( "div" ).click(function() {
      //   var color = $( this ).css( "background-color" );
      //   $( "#result" ).html( "That div is <span style='color:" +
      //     color + ";'>" + color + "</span>." );
      // });

      // attributes & html in jQuery
      $('#changeLink').click(function() {
        console.log('change link clicked');
        lynk = $('a.jQLearnLink').attr('href');
        console.log('Existing Link : ');
        console.log(lynk);
        $('a.jQLearnLink').attr('href', 'https://jquery.com');
        $('a.jQLearnLink').html('jQUERY');
        lynk = $('a.jQLearnLink').attr('href');
        console.log('Current Link : ');
        console.log(lynk);
      });

  });
  function changeStyle(element, styleType, styleValue) {
    $(element).css(styleType,styleValue);
  }
  function init() {
    animationDuration = $("#animationDuration").val();
    console.log(animationDuration);
    $('.linear-gradient').hide(animationDuration);
    $('.box-model').hide(animationDuration);
    $('.toolbar-Div').hide(animationDuration);
    $('#tool-lg').hide(animationDuration);
    mainDivContent = $('select#show-element').val();
    // console.log(constructFlexValues());
  }

function constructFlexValues() {
  a = ["<label for='Value'>Value</label>",
  "<select class='lg-value' id='lg-value' onchange='lgValChange(this.value)'>",
    "<option value='flex' selected='selected'>Flex</option>",
    "<option value='block'>Block</option>",
  "</select>"]
  return a.join(' ');
}

function propChange(v) {
  if (v === 'lg-display') {
    abc = constructFlexValues();
    $('#lg-value').append(abc);
  }
  console.log(v);
}

function lgValChange(v) {
  console.log("Clicked Value of lg");
  console.log(v);
  $('.linear-gradient').css("display", $('#lg-value').val());
  $('.linear-gradient').css("background-color", "yellow");
  // if ($('#lg-value').val() === 'flex' ) {
  //   $('.linear-gradient').css("display", "flex");
  // } else if ($('#lg-value').val() === "block" ) {
  //   $('.linear-gradient').css("display", "block");
  // }

  console.log("Real Value of lg");
  console.log($('#linear-gradient').css( "display" ));
}

function changeAnimationDuration() {
  animationDuration = $("#animationDuration").val();
}


// Children
// https://techfunda.com/howto/328/children-get-all-children-elements
// $("div").children().css("background", "red");
