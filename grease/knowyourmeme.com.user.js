// ==UserScript==
// @name        Know Your Meme
// @namespace   Menu Hide
// @include     http://knowyourmeme.com/*
// @include     https://knowyourmeme.com/*
// @include     http://apis.google.com/*
// @include     https://apis.google.com/*
// @run-at      document-end
// @version     1.1
// @grant       none
// ==/UserScript==
$('.floating-bar.floating-fixed')[0].style.visibility = 'hidden';
//$('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden'; // G+ icon

var e = document.getElementsByClassName('g-plusone-wrapper')[0];
var children = e.children;
var message = e.tagName+":";
for (var i = 0; i < children.length; i++) {
  message += "\n  "+children[i].tagName;
}
alert(message);

e = children[0];
var children = e.children;
var message = e.tagName+":";
for (var i = 0; i < children.length; i++) {
  message += "\n  "+children[i].tagName;
}
alert(message);

e = children[0];
alert(e.tagName+': "'+e.style.visibility+'"');
e.style.visibility = 'hidden';
alert(e.tagName+': "'+e.style.visibility+'"');
