// ==UserScript==
// @name        Washington Post
// @namespace   Menu Hide
// @include     http://www.washingtonpost.com/*
// @include     https://www.washingtonpost.com/*
// @exclude     http://www.washingtonpost.com/
// @exclude     https://www.washingtonpost.com/
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementById('wp-header').style.visibility = 'hidden';
