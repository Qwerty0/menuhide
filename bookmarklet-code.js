String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var domain = document.domain;

if (domain.endsWith('twitter.com')) {
  $('.topbar.js-topbar')[0].style.visibility = 'hidden';
} else if (domain.endsWith('nytimes.com')) { // no jQuery
  document.getElementById('masthead').style.visibility = 'hidden';
} else if (domain.endsWith('quora.com')) { // no jQuery
  document.getElementsByClassName('SiteHeader')[0].style.visibility = 'hidden';
} else if (domain.endsWith('arstechnica.com')) {
  $('#primary')[0].style.visibility = 'hidden';
} else if (domain.endsWith('knowyourmeme.com')) {
  $('.floating-bar.floating-fixed')[0].style.visibility = 'hidden';
  $('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden'; // G+ icon
} else if (domain.endsWith('dailydot.com')) {
  $('#nav-bar')[0].style.visibility = 'hidden';
}
