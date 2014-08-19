// ==UserScript==
// @name        Forbes
// @namespace   Menu Hide
// @include     http://www.forbes.com/*
// @include     https://www.forbes.com/*
// @exclude     http://www.forbes.com/home_*
// @exclude     https://www.forbes.com/home_*
// @version     1.0
// @grant       none
// ==/UserScript==
document.querySelectorAll('.container.minimum')[0].style.visibility = 'hidden';

