// ==UserScript==
// @name        Learn Code The Hard Way
// @namespace   Menu Hide
// @include     http://*.learncodethehardway.org/book/*
// @include     https://*.learncodethehardway.org/book/*
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementsByClassName('topbar')[0].style.visibility = 'hidden';
