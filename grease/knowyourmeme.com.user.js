// ==UserScript==
// @name        Know Your Meme
// @namespace   Menu Hide
// @include     http://knowyourmeme.com/*
// @include     https://knowyourmeme.com/*
// @include     http://apis.google.com/*
// @include     https://apis.google.com/*
// @version     1.0
// @grant       none
// ==/UserScript==
$('.floating-bar.floating-fixed')[0].style.visibility = 'hidden';
$('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden'; // G+ icon
