// ==UserScript==
// @name        Youtube
// @namespace   Menu Hide
// @include     http://www.youtube.com/watch*
// @include     https://www.youtube.com/watch*
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementById('masthead-positioner').style.visibility = 'hidden';
// keep the Youtube logo/link visible
document.getElementById('logo-container').style.visibility = 'visible';
