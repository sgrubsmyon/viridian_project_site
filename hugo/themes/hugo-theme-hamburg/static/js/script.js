// https://stackoverflow.com/questions/16442016/jquery-sticky-header-that-shrinks-when-scrolling-down
function navbarTinyToggler() { // scroll touchmove
  if (window.scrollY > 0) {
    document.getElementById('navbar-outer').classList.add('navbar-tiny');
  } else {
    document.getElementById('navbar-outer').classList.remove('navbar-tiny');
  }
}

window.addEventListener("scroll", navbarTinyToggler);
window.onload = navbarTinyToggler;
