// ==UserScript==
// @name        Youtube
// @namespace   Menu Hide
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @version     2.1
// @grant       none
// ==/UserScript==

// Things to do when hiding
var hideMenu = function() {
  document.getElementById('masthead-positioner').style.visibility = 'hidden';
  // keep the Youtube logo/link visible
  document.getElementById('logo-container').style.visibility = 'visible';
}

// Automatically hide the menu on video pages, otherwise add a button to do it
if (document.location.href.match(/^https?:\/\/(www\.)?youtube\.com\/watch\?/)) {
  hideMenu();
} else {
  var button = document.createElement('input');
  button.id = 'grease-hide-button';
  button.type = 'button';
  button.value = 'Hide';
  button.style.marginRight = '20px';
  button.onclick = hideMenu;
  var parent = document.getElementById('appbar-nav');
  var sibling = document.getElementsByClassName('appbar-nav-menu')[0];
  parent.insertBefore(button, sibling);
}
