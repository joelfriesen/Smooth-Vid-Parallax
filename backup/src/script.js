//-----------------------------------------------------------------------
// Scroll Magic ---------------------------------------------------------
//-----------------------------------------------------------------------
//if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
//{
//   alert("This is not designed to work in Safari Browser on the desktop and would look best in chrome or Firefox");
//}
//else{
var viewer = document.querySelector(".viewer"),
  frame_count = 17,
  offset_value = 100;

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});
new ScrollMagic.Scene({
  triggerElement: "#sticky",
  duration: frame_count * offset_value + "vh",
  reverse: true
})
  .setPin("#sticky")
  //.addIndicators()
  .addTo(controller);

for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
    triggerElement: "#sticky",
    offset: i * offset_value
  })
    .setClassToggle(viewer, "frame" + i)
    //.addIndicators()
    .addTo(controller);
}
//-----------------------------------------------------------------------
// Parallax scoll -------------------------------------------------------
//-----------------------------------------------------------------------
$(window).bind("scroll", function (e) {
  parallaxScroll();
  //redrawDotNav();
});

function parallaxScroll() {
  // Thanks: Jonathan Nicol (f6design.com)
  var scrolled = $(window).scrollTop();
  var documentHeight = $(document).height();
  var pageHeight = $(window).height();
  var reversescroll = scrolled - documentHeight + pageHeight;
  //var scrollPercent = (scrolled / documentHeight) * 100;
  $("#hole").css("height", 16120 - pageHeight * 4 + "px");
  //set the height of the parallax container.
  $("#timeline").css("bottom", 0 + reversescroll / 5 + "px");
  $("#parallax-bg1").css("bottom", 0 + reversescroll / 5 + "px");
  $("#artifacts").css("bottom", 0 + reversescroll / 5 + "px");
  // Used bottom, and position fixed so taht when you scroll to the bottom of the page, everything lines up without gaps.
  $("#parallax-bg2a").css("top", 0 + reversescroll / 2 + "px");
  $("#parallax-bg2b").css("top", 0 + reversescroll / 2 + "px");
  $("#parallax-bg3a").css("top", 0 + reversescroll / 6 + "px");
  $("#parallax-bg3b").css("top", 0 + reversescroll / 6 + "px");
  // $(".headline").css("background-position-y", 0 - reversescroll / 2 + "px");
}
//-----------------------------------------------------------------------
// Clickable artifacts --------------------------------------------------
//-----------------------------------------------------------------------

$(".artifact").click(function () {
  if ($(this).hasClass("hovered")) {
    $(this).removeClass("hovered");
    $("#parallax-bg1").removeClass("blur");
    $("#parallax-bg2a").removeClass("blur");
    $("#parallax-bg2b").removeClass("blur");
    $("#parallax-bg3a").removeClass("blur");
    $("#parallax-bg3b").removeClass("blur");
    $("#timeline").removeClass("blur");
    $("article").removeClass("blur");
    $(".artifact").removeClass("blur");
    $("#hole article").removeClass("lowzed");
  } else {
    $(".artifact").removeClass("hovered");
    $(this).addClass("hovered");
    $("#parallax-bg1").addClass("blur");
    $("#parallax-bg2a").addClass("blur");
    $("#parallax-bg2b").addClass("blur");
    $("#parallax-bg3a").addClass("blur");
    $("#parallax-bg3b").addClass("blur");
    $("#timeline").addClass("blur");
    $("article").addClass("blur");
    $(".artifact").addClass("blur");
    $("#hole article").addClass("lowzed");
  }
});

function bigifyArtifact(artid) {
  var check = $("label[for='" + artid + "']");
  check.toggleClass("hovered");
}

$(".artifactlink1").click(function () {
  bigifyArtifact("artifact1");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});
$(".artifactlink2").click(function () {
  bigifyArtifact("artifact2");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});
$(".artifactlink3").click(function () {
  bigifyArtifact("artifact3");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});
$(".artifactlink4").click(function () {
  bigifyArtifact("artifact4");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});
$(".artifactlink5").click(function () {
  bigifyArtifact("artifact5");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});
$(".artifactlink6").click(function () {
  bigifyArtifact("artifact6");
  $("#parallax-bg1").toggleClass("blur");
  $("#parallax-bg2a").toggleClass("blur");
  $("#parallax-bg2b").toggleClass("blur");
  $("#parallax-bg3a").toggleClass("blur");
  $("#parallax-bg3b").toggleClass("blur");
  $("#timeline").toggleClass("blur");
  $("article").toggleClass("blur");
  $(".artifact").toggleClass("blur");
});

//-----------------------------------------------------------------------
// Scroll to next section smoothly---------------------------------------
//-----------------------------------------------------------------------
function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top - 100 }, 9000);
}
$("#link").click(function () {
  scrollToAnchor("id1");
});
$("#link2").click(function () {
  scrollToAnchor("id2");
});
$("#link3").click(function () {
  scrollToAnchor("id3");
});
$("#link4").click(function () {
  scrollToAnchor("id4");
});
$("#link5").click(function () {
  scrollToAnchor("id5");
});
$("#link6").click(function () {
  scrollToAnchor("id6");
});
$("#link7").click(function () {
  scrollToAnchor("id7");
});
//-----------------------------------------------------------------------
// Redraw Nav -----------------------------------------------------------
//-----------------------------------------------------------------------
// function redrawDotNav() {
//         var section1Top = 0;
//         // The top of each section is offset by half the distance to the previous section.
//         var section2Top = $('#article1').offset().top - (($('#article2').offset().top - $('#article1').offset().top) / 2);
//         var section2Top = $('#article2').offset().top - (($('#article3').offset().top - $('#article2').offset().top) / 2);
//         var section3Top = $('#article3').offset().top - (($('#article4').offset().top - $('#article3').offset().top) / 2);
//         var section4Top = $('#article4').offset().top - (($(document).height() - $('#article4').offset().top) / 2);
//         $('nav#primary a').removeClass('active');
//         $('.container .splash').removeClass('active');
//         if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
//             $('nav#primary a.article1').addClass('active');
//             $('.container  .whale').removeClass('active');
//             $('.container  .whalewake').removeClass('active');
//         } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
//             $('nav#primary a.article2').addClass('active');
//             $('#article2 .splash').addClass('active');
//             $('#article2 .whale').addClass('active');
//             $('#article2 .whalewake').addClass('active');
//         } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
//             $('nav#primary a.article3').addClass('active');
//             $('.container  .whale').removeClass('active');
//             $('.container  .whalewake').removeClass('active');
//         } else if ($(document).scrollTop() >= section4Top) {
//             $('nav#primary a.article4').addClass('active');
//         }

//     };
//};
