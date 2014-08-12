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
For some reason, maybe because of the iframe, it's not available to be hidden
at the end of the document load. So a delay is necessary. And it even seems to
pop up again after being hidden. Because of that, and the fact that the document
load can take a while, this tries hiding it every second for 5 seconds.
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

