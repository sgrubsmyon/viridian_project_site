// put jQuery stuff inside the document ready function
$(document).ready(function(){
  /* ****************************************************
    * JS code to hide and show the tiles on front page *
    **************************************************** */
  // Hide all anchor targets:
  $('.anchor').hide();
  // pure JS version of $('.anchor').hide();
  // var anchors = document.getElementsByClassName('anchor');
  // for (var i = 0; i < anchors.length; i++) {
  //   anchors[i].style.display = 'none';
  // }
  
  // Smooth scrolling:
    /* https://css-tricks.com/snippets/jquery/smooth-scrolling/ (comment by Devin Sturgeon) */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name="' + this.hash.slice(1) +'"]');
      if (target.length) {
        var prevTarget = $('.anchor[style=""]');
        if (prevTarget.length) {
          $('html, body').animate({
            scrollTop: prevTarget.offset().top
          }, 1000);
          prevTarget.hide(); // hide previously shown anchor target
          target.fadeIn(1000); // show this particular target
        } else {
          target.fadeIn(1000); // show this particular target
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
        return false;
      }
    }
  });
  
  // function animate(elem, style, unit, from, to, time, prop) {
  //   if (!elem) {
  //     return;
  //   }
  //   var start = new Date().getTime(),
  //     timer = setInterval(function () {
  //       var step = Math.min(1, (new Date().getTime() - start) / time);
  //       if (prop) {
  //         elem[style] = (from + step * (to - from))+unit;
  //       } else {
  //         elem.style[style] = (from + step * (to - from))+unit;
  //       }
  //       if (step === 1) {
  //         clearInterval(timer);
  //       }
  //     }, 25);
  //   if (prop) {
  //     elem[style] = from+unit;
  //   } else {
  //     elem.style[style] = from+unit;
  //   }
  // }
  
  // var tiles = document.getElementsByClassName('btn-tile');
  // for (i = 0; i < tiles.length; i++) {
  //   tiles[i].onclick = function(event) {
  //     console.log("mooot!");
  //     for (var j = 0; j < anchors.length; j++) {
  //       // Fadeout and hide all (other) anchors
  //       // https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
  //       let s = anchors[j].style;
  //       if (s.display !== "none") {
  //         s.display = "none";
  //         //s.opacity = 1;
  //         //(function fadeout(){(s.opacity-=0.05)<0?s.display='none':setTimeout(fadeout,50)})();        
  //       }
  //     }
  //     let id = this.href.replace(/.*\/#/, '');
  //     let target = document.getElementById(id);
  //     // Scroll to this particular anchor
  //     animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 2000, true);
  //     // target.scrollIntoView({ 
  //     //   behavior: 'smooth' 
  //     // });
  //     // Fadein and show this particular anchor
  //     let s = target.style;
  //     s.display = 'block';
  //     s.opacity = 0;
  //     (function fadein(){(s.opacity = Number(s.opacity) + 0.05)>1.0?s.opacity = 1:setTimeout(fadein,50)})();
  //   };
  // }
  
  // Color change of tiles on click:
  var gradients = ['.btn-gradient-ll', '.btn-gradient-lc', '.btn-gradient-lr',
                   '.btn-gradient-ml', '.btn-gradient-mc', '.btn-gradient-mr', 
                   '.btn-gradient-ul', '.btn-gradient-uc', '.btn-gradient-ur'];
  $.each(gradients, function(index, tile) {
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
});