// ==UserScript==
// @name        Twitter
// @namespace   Menu Hide
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @exclude     http://twitter.com/
// @exclude     https://twitter.com/
// @version     1.1
// @grant       none
// ==/UserScript==
document.getElementsByClassName('topbar')[0].style.visibility = 'hidden';

