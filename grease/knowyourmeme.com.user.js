// ==UserScript==
// @name        Know Your Meme
// @namespace   Menu Hide
// @include     http://knowyourmeme.com/*
// @include     https://knowyourmeme.com/*
// @version     1.3
// @grant       none
// ==/UserScript==
document.getElementsByClassName('floating-bar')[0].style.visibility = 'hidden';
/* Google Plus icon.
 * It seems to be loaded after the end of the page load (when this script is
 * executed). So it's not yet available at this point. It can't even be hidden
 * by adding a CSS rule to a stylesheet, since the iframe has inline CSS
 * explicitly making it visible.
 * So instead we send of several timed events that wait 1 sec, 2 sec, etc up
 * 'till 5 seconds, after which it's hopefully loaded, then hide it.
 */
function hideGPlus() {
  var frames = document.querySelectorAll('.g-plusone-wrapper iframe');
  // if the element exists and it's not hidden yet
  if (frames.length > 0 && frames[0].style.visibility !== 'hidden') {
    frames[0].style.visibility = 'hidden';
  }
}
var delay = 0;
for (var i = 0; i < 5; i++) {
  delay += 1000;
  window.setTimeout(hideGPlus, delay);
}

