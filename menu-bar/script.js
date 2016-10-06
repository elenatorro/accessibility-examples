var ourWorkSubmenu, navLinks;

(function() {

  ourWorkSubmenu = document.getElementById('our-work-submenu');
  navLinks       = document.querySelectorAll('.nav-link');

  ourWorkSubmenu.addEventListener('focus', _ourWorkSubmenuFocus);

  navLinks.forEach(function (navLink) {
    navLink.addEventListener('focus', _ourWorkSubmenuFocusOut);
  });
})();

function _ourWorkSubmenuFocus() {
  ourWorkSubmenu.nextElementSibling.setAttribute('aria-expanded', true);
}

function _ourWorkSubmenuFocusOut() {
  ourWorkSubmenu.nextElementSibling.setAttribute('aria-expanded', false);
}
