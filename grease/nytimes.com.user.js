// ==UserScript==
// @name        The New York Times
// @namespace   Menu Hide
// @include     http://www.nytimes.com/*
// @include     https://www.nytimes.com/*
// @exclude     http://www.nytimes.com/
// @exclude     https://www.nytimes.com/
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementById('masthead').style.visibility = 'hidden';
