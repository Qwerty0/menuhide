// ==UserScript==
// @name        Ars Technica
// @namespace   Menu Hide
// @include     http://arstechnica.com/*
// @include     https://arstechnica.com/*
// @exclude     http://arstechnica.com/
// @exclude     https://arstechnica.com/
// @version     1.3
// @grant       none
// ==/UserScript==
document.getElementById('masthead').style.visibility = 'hidden';
// keep homepage link visible, but out of the way
var home = document.getElementById('home-icon');
home.style.visibility = 'visible';
home.style.position = 'relative';
home.style.left = '-16px';
