// ==UserScript==
// @name        Tumblr
// @namespace   Menu Hide
// @include     http://www.tumblr.com/dashboard*
// @include     https://www.tumblr.com/dashboard*
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementsByClassName('l-header-container')[0].style.visibility = 'hidden';
