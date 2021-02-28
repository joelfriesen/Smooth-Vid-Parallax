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


var filmstop = 30; // The precentage you want the film to finish in
var filmlength = 300; //Slice up the film and put into the directory using a slicing tool like
var transition = 10; //Time between video and content

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
  var top = $(window).scrollTop();
  var screen = $(window).height();
  var webpage = $(document).height();
  var percentage = top / (webpage - screen) * 100; 

  console.clear();
  console.log("top: " + top + " / (  webpage: " + webpage + " - screen: " + screen + ") = percentage:" + percentage)

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
  if (percentage < filmstop - transition) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline,.articles").css("top", "100vh");
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg3a,.parallax-bg2b,.parallax-bg3b").css("background-position", "0 0")
    console.log("before transition")
  } else if ((percentage > filmstop - transition) && (percentage < (filmstop))) {
    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.artifacts,.timeline,.articles").css("top", (-(percentage - filmstop) * transition) + "vh")
    $(".parallax-bg2a,.parallax-bg3a,.parallax-bg2b,.parallax-bg3b").css("background-position", "0 0")
    $(".parallax-bg1").css("background-position", "50% 0")
    console.log(" transition")
  } else if (percentage > filmstop) {
    var speedofrock = (percentage-filmstop)*(100/(100-filmstop))*36.9; //This is 0-100 from the point where the transition stops

    $(".parallax-bg1,.parallax-bg2a,.parallax-bg2b,.parallax-bg3a,.parallax-bg3b,.articles").css("top", "0vh")
    $(".parallax-bg1").css("background-position", "50% " + -speedofrock + "px"); //The image is 3690px tall, and I want to scroll it up to the point where it's finished at 100%

    $(".parallax-bg2a").css("background-position", "100% " + -speedofrock * 2 + "px");    //B R
    $(".parallax-bg2b").css("background-position", "0 " + -speedofrock  * 2+ "px");       //B L
    $(".parallax-bg3a").css("background-position", "100% " + -speedofrock  * 3+ "px");    //F L
    $(".parallax-bg3b").css("background-position", "0 " + -speedofrock  * 3+ "px");       //F R
    
    $(".artifacts").css("top", -speedofrock + "px");
    $(".timeline").css("top", -speedofrock + "px");
    $(".articles").css("top", -speedofrock + "px");

    
    $('.frame-' + filmlength).removeClass("invis");
    console.log("after transition")
  }
}