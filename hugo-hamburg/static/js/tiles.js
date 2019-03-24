/* ****************************************************
  * JS code to hide and show the tiles on front page *
  **************************************************** */
// Hide all anchor targets:
// pure JS version of $('.anchor').hide();
var anchors = document.getElementsByClassName('anchor');
for (var i = 0; i < anchors.length; i++) {
  anchors[i].style.display = 'none';
}

// Smooth scrolling:
  /* https://css-tricks.com/snippets/jquery/smooth-scrolling/ (comment by Devin Sturgeon) */
//  $('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//        || location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        //
//        $('.anchor').fadeOut(1000); // hide all (other) anchor targets
//        $('.anchor').hide(); // hide all (other) anchor targets
//        target.fadeIn(1000); // show this particular target
//        //
//          $('html,body').animate({
//            scrollTop: target.offset().top
//          }, 1000);
//        return false;
//      }
//    }
//  });
var tiles = document.getElementsByClassName('btn-tile');
for (i = 0; i < tiles.length; i++) {
  tiles[i].onclick = function(event) {
    console.log("mooot!");
    for (var j = 0; j < anchors.length; j++) {
      // Fadeout and hide all (other) anchors
      // https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
      let s = anchors[j].style;
      if (s.display !== "none") {
        s.display = "none";
        //s.opacity = 1;
        //(function fadeout(){(s.opacity-=0.05)<0?s.display='none':setTimeout(fadeout,50)})();        
      }
    }
    // Fadein and show this particular anchor
    let id = this.href.replace(/.*\/#/, '');
    let s = document.getElementById(id).style;
    s.display = 'block';
    s.opacity = 0;
    (function fadein(){(s.opacity = Number(s.opacity) + 0.05)>1.0?s.opacity = 1:setTimeout(fadein,50)})();
  };
}

// Color change of tiles on click:
var gradients = ['.btn-gradient-ll', '.btn-gradient-lc', '.btn-gradient-lr',
                 '.btn-gradient-ml', '.btn-gradient-mc', '.btn-gradient-mr', 
                 '.btn-gradient-ul', '.btn-gradient-uc', '.btn-gradient-ur'];
$.each(tiles, function(index, tile) {
  $(tile).click(function() {
    $('.btn-tile').css('background-color', '#999999');
    $('.btn-tile').css('background-image', 'none');
    $(this).css('background-color', '');
    $(this).css('background-image', '');
  });
});
$('body').click(function() {
  $('.btn-tile').css('background-color', '');
  $('.btn-tile').css('background-image', '');
});
//};