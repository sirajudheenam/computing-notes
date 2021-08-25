let element, styleType, styleValue;
let animationAdded = false;
let mainDivContent;
let animationDuration = 0;
// implicit $( document ).ready( function() {});
$( function() {
    initialize();

    var style = {}
      // Call init on Reset
      $('#resetButton').click(initialize);

      $('#toggleButton').click(function() {
        // initialize();
        console.log(`mainDivContent: ${mainDivContent}`);

        // Selecting a Select Option Value using ID
        if (mainDivContent) {
          $(`.${mainDivContent}`).toggle();
          mainDivContent = "";
        } else {
          mainDivContent = $('select#show-element').val();
          $(`.${mainDivContent}`).toggle();
        }

      });

      $('#flex-direction').change( function() {
        if ($('#lg-value').val() === 'flex') {
          $( '#mainDiv').css("flex-direction", $(this).val());
        }
      });

      // Check Visibility and clears
      const clearMainDivContent = function() {
        if ($( "#linear-gradient" ).is( ":visible" )) {
          console.log("linear-gradient is Visible");
        }
        if ($('#box-model').is( ":visible" )) {
          console.log("box-model is Visible");
        }
        if ($("#select-elements").is( ":visible" )) {
          console.log("select-elements is Visible");
        }
      }


      // CheckBox validation
      $('#showToolBar').change( function() {
        // console.log(mainDivContent);
        var $element = $( this );
        toolbar = $('#toolbar-Div');
        toolbar_checked = $element.prop( "checked" ); //$element.is( ":checked" )
        toolbar.html("<h2>Tools: </h2><ul>" + mainDivContent ? mainDivContent : "" + "</ul>");
        mainDivContent = $('select#show-element').val();
        if (toolbar_checked) {
          if (mainDivContent === 'linear-gradient') {
            console.log('lg !!  ');
            toolbar.show();
            $('#tool-lg').toggle(animationDuration);
          } else if (mainDivContent === 'box-model') {
            toolbar.show();
            console.log('box-model!!');
          } else if (mainDivContent === 'select-elements') {
            toolbar.show();
            console.log('select-elements!!');
          }
        }
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
        // // showElement = $('select.showElement').val();
        // // console.log(showElement);
        // contentToDisplay = e.target.value;
        // console.log(contentToDisplay);
        // $(`.${contentToDisplay}`).toggle();

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
      // attributes & html in jQuery
      $('#changeLink').click(function() {
        console.log('change link clicked');
        // Get Attribute using attr of jQuery
        old_lynk = $('a.jQLearnLink').attr('href');
        console.log('Existing Link : ');
        console.log(old_lynk);
        // Set Attribute using attr of jQuery
        $('a.jQLearnLink').attr('href', 'https://jquery.com');
        $('a.jQLearnLink').html('jQUERY');
        lynk = $('a.jQLearnLink').attr('href');
        console.log('Current Link : ');
        console.log(lynk);
      });

      // Change Display for mainDiv /* flex block grid */
      $('#lg-value').change(function() {
        lg_value = $('#lg-value').val();
        $(".mainDiv").css("display",lg_value);
      });

      // SELECT-ELEMENTS PART
      $(".btn-refresh-count").click(getValues);

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




  });

  const changeStyle = function (element, styleType, styleValue) {
    $(element).css(styleType,styleValue);
  }

  const initialize = function() {
    animationDuration = $("#animationDuration").val();

    $("#menuForm").hide();

    $('#linear-gradient').hide();
    $('#box-model').hide();
    $('#toolbar-Div').hide();
    $('#tool-lg').hide();
    $("#select-elements").hide();
    mainDivContent = $('select#show-element').val();
    getValues();
  }

// function constructFlexValues() {
//   a = ["<label for='Value'>Value</label>",
//   "<select class='lg-value' id='lg-value' onchange='lgValChange(this.value)'>",
//     "<option value='flex' selected='selected'>Flex</option>",
//     "<option value='block'>Block</option>",
//   "</select>"]
//   return a.join(' ');
// }

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

const getValues = function() {
  $("#link-count").text($('a').length);
  $("#p-count").text($('p').length);
  $("#a-count").text($('a').length);
  $("#ul-count").text($("ul").length);
  $("#h1-count").text($('h1').length);
  $("#h2-count").text($('h2').length);
}
// Children
// https://techfunda.com/howto/328/children-get-all-children-elements
// $("div").children().css("background", "red");
