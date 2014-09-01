// ==UserScript==
// @name        WikiHow
// @namespace   Menu Hide
// @include     http://www.wikihow.com/*
// @include     https://www.wikihow.com/*
// @exclude     http://www.wikihow.com/Main-Page
// @exclude     https://www.wikihow.com/Main-Page
// @exclude     http://www.wikihow.com/
// @exclude     https://www.wikihow.com/
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementById('header_outer').style.visibility = 'hidden';
