// ==UserScript==
// @name        Doodle
// @namespace   Menu Hide
// @include     http://doodle.com/*
// @include     https://doodle.com/*
// @exclude     http://doodle.com/
// @exclude     https://doodle.com/
// @exclude     http://doodle.com/?*
// @exclude     https://doodle.com/?*
// @version     1.0
// @grant       none
// ==/UserScript==
// Need to add a static CSS rule because the menu only adds the full set of
// classes to itself after you scroll down.
var css = window.document.styleSheets[0];
css.insertRule('.fixed-header.fixed { visibility: hidden; }', 0);

