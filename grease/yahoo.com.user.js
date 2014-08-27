// ==UserScript==
// @name        Yahoo
// @namespace   Menu Hide
// @include     http://*.yahoo.com/*
// @include     https://*.yahoo.com/*
// @version     1.0
// @grant       none
// ==/UserScript==
/* Adding a stylesheet rule works better than dynamically altering element
 * properties. And adding the rule to an existing stylesheet (the first one)
 * can throw a security exception, so create our own.
 * This likely only works on some Yahoo properties, since they're so fragmented.
 * But they nicely add a "has-scrolled" and/or "page-has-scrolled" class when
 * you scroll down, so when this works, it lets you still see the menu bar when
 * you scroll to the top!
 */
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".has-scrolled #UH, .has-scrolled #yucsHead, .has-scrolled #masthead, .page-has-scrolled #UH, .page-has-scrolled #yucsHead, .page-has-scrolled #masthead { visibility: hidden; }";
document.head.appendChild(css);
