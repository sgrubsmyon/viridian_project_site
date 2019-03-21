// https://stackoverflow.com/questions/16442016/jquery-sticky-header-that-shrinks-when-scrolling-down
window.addEventListener("scroll", function() { // scroll touchmove
  if (window.scrollY > 0) {
    document.getElementById('navbar-outer').classList.add('navbar-tiny');
    document.getElementById('navbar-header').classList.add('navbar-header-tiny');
  } else {
    document.getElementById('navbar-outer').classList.remove('navbar-tiny');
    document.getElementById('navbar-header').classList.remove('navbar-header-tiny');
  }
  // $('.navbar-nav').toggleClass('navbar-nav-tiny', $(document).scrollTop() > 0);
  // $('.navbar-brand').toggleClass('navbar-brand-tiny', $(document).scrollTop() > 0);
});