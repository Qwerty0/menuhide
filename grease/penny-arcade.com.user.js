// ==UserScript==
// @name        Penny Arcade
// @namespace   Menu Hide
// @include     http://www.penny-arcade.com/comic*
// @include     https://www.penny-arcade.com/comic*
// @version     1.0
// @grant       none
// ==/UserScript==
document.getElementById('bb').style.visibility = 'hidden';
document.getElementById('header').style.visibility = 'hidden';
// keep homepage link visible
// var brands = document.querySelectorAll('#bb .content .brands')[0];
// brands.firstElementChild.style.visibility = 'visible';
