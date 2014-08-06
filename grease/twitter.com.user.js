// ==UserScript==
// @name        Twitter
// @namespace   Menu Hide
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @exclude     http://twitter.com/
// @exclude     https://twitter.com/
// @version     1.0
// @grant       none
// ==/UserScript==
$('.topbar.js-topbar')[0].style.visibility = 'hidden';
