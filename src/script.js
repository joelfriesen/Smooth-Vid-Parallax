$(window).on('scroll resize load', parallax);

//-----------------------------------------------------------------------
// Clickable artifacts --------------------------------------------------
//-----------------------------------------------------------------------

$(".artifact").click(function () {
  if ($(this).hasClass("hovered")) {
    $(this).removeClass("hovered");
    $("#hole article").removeClass("lowzed");
  } else {
    $(".artifact").removeClass("hovered");
    $(this).addClass("hovered");
    $("#hole article").addClass("lowzed");
  }
});

$(".artifactlink").click(function (event) {
  $("label[for='" + event.target.id + "']").addClass("hovered")
});

//-----------------------------------------------------------------------
// Clickable Links ------------------------------------------------------
//-----------------------------------------------------------------------

$(".clicklink").click(function () {
  scrollToAnchor(this.id)
});

function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}
  
var imagesize = 3690; // This is needed for the hole calculations to figure out when the bottom is at the bottom of the screen
var filmstop = 30; // The percent you want the transition to end
var filmlength = 330; //Slice up the film and put into the directory using a slicing tool
var transition =10; //percent for legnth of transition
var footer =90; //percent for starting the footer

for (i = 1; i < filmlength + 1; i++) {
  //Make the frames, file starts at #001
  $('<div class="scrollholder frame-' + i + ' invis" style="background-image: url(video/' + i + '.jpg)" />').appendTo('.imagescroll');
}

//-----------------------------------------------------------------------
// Parallax -------------------------------------------------------------
//-----------------------------------------------------------------------

function parallax() {
  //
  //the heart beat
  var legnthadjustment = 110;  // This is the calculation in percentage adjustment - you might need to tweak something at the end
  var top = $(window).scrollTop();  // in px, how far is the top of the document, from the top of the screen
  var screen = $(window).height(); // in px, how tall your screen is
  var webpage = $(document).height(); // in px, how tall the total document is. We set this in HV in the CSS, on the body tag.
  var percentage = top / (webpage - screen) * legnthadjustment; // what percent of the document is showing in the screen


  // console.clear();
  // console.log("top: " + top + " / (  webpage: " + webpage + " - screen: " + screen + ") = percentage:" + percentage)

  // Run the video
  if (percentage < filmstop) {
    var videostill = Math.floor((((percentage / filmstop) * (filmlength - 1)) + 1));  // show the stil you are on
    var videostillnext = Math.floor((((percentage / filmstop) * (filmlength - 1)) + 2));  //queue up the next one
    //
    //unhide the thing you are on 
    $('.frame-' + videostill).removeClass("invis");
    //
    //Hide everything from there up
    for (i = videostillnext; i < filmlength + 1; i++) {
      $('.frame-' + i).addClass("invis");
    }
    //$(".intro").css("padding-top", percentage*10 + "vh");
  }
  if (percentage > filmstop) {
    for (i = 1; i < filmlength + 1; i++) {
      $('.frame-' + i).removeClass("invis");
    }
    //$(".intro").css("padding-top", percentage*10 + "vh");
  }

  // before transition
  if (percentage < filmstop - transition) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("top", "100vh");
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("bottom", "unset")
  
  // transition
  } else if ((percentage > filmstop - transition) && (percentage < (filmstop))) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("top", (-(percentage - filmstop) * transition) + "vh")
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("bottom", "unset")
    $(".parallax-bg1").css("background-position", "50% 0")

  // after transition
  } else if ((percentage > filmstop)&& (percentage < footer)) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("top", "0")
    $(".parallax-bg1").css("background-position", "50% " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) + "px");
    $(".artifacts").css("top", -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100))  + "px");
    $(".timeline").css("top", -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100))   + "px");
    $(".parallax-bg2a, .parallax-bg2b").css("background-position", "0 " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) * 2 + "px");       //B L
    $(".parallax-bg3a, .parallax-bg3b").css("background-position", "0 " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) * 3 + "px");       //F R
    
  } else if (percentage > footer) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline").css("top", "0")
    $('.frame-' + filmlength).removeClass("invis");
    $(".parallax-bg1").css("background-position", "50% " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) + "px");
    $(".artifacts").css("top", -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100))  + "px");
    $(".timeline").css("top", -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100))   + "px");
    $(".parallax-bg2a, .parallax-bg2b").css("background-position", "0 " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) * 2 + "px");       //B L
    $(".parallax-bg3a, .parallax-bg3b").css("background-position", "0 " + -((percentage-transition-filmstop/percentage)*((imagesize - screen)/100)) * 3 + "px");       //F R
    
    $(".footer").css("bottom",  0 + "vh");       
  }
}
