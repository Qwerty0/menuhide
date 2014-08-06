// ==UserScript==
// @name        Quora
// @namespace   Menu Hide
// @include     http://www.quora.com/*
// @include     https://www.quora.com/*
// @exclude     http://www.quora.com/
// @exclude     https://www.quora.com/
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementsByClassName('SiteHeader')[0].style.visibility = 'hidden';
