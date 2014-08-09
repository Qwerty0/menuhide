String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var domain = document.domain;
//TODO: apply only when scrolled below the top
if (domain.endsWith('twitter.com')) {
  $('.topbar.js-topbar')[0].style.visibility = 'hidden';
} else if (domain.endsWith('nytimes.com')) {
  document.getElementById('masthead').style.visibility = 'hidden';
} else if (domain.endsWith('youtube.com')) {
  document.getElementById('masthead-positioner').style.visibility = 'hidden';
  // keep the Youtube logo/link visible
  document.getElementById('logo-container').style.visibility = 'visible';
} else if (domain.endsWith('quora.com')) {
  document.getElementsByClassName('SiteHeader')[0].style.visibility = 'hidden';
} else if (domain.endsWith('arstechnica.com')) {
  $('#masthead')[0].style.visibility = 'hidden';
} else if (domain.endsWith('knowyourmeme.com')) {
  $('.floating-bar.floating-fixed')[0].style.visibility = 'hidden';
  $('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden'; // G+ icon
} else if (domain.endsWith('dailydot.com')) {
  $('#nav-bar')[0].style.visibility = 'hidden';
} else if (domain.endsWith('stackexchange.com')
    || domain.endsWith('stackoverflow.com'))
    || domain.endsWith('askubuntu.com'))
    || domain.endsWith('superuser.com'))
    || domain.endsWith('serverfault.com'))
    || domain.endsWith('mathoverflow.net')) {
  document.getElementById('noscript-warning').style.visibility = 'hidden';
}
