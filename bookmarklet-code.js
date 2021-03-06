String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var domain = document.domain;
//TODO: apply only when scrolled below the top
if (domain.endsWith('twitter.com')) {
  document.getElementsByClassName('topbar')[0].style.visibility = 'hidden';
} else if (domain.endsWith('nytimes.com')) {
  document.getElementById('masthead').style.visibility = 'hidden';
} else if (domain.endsWith('youtube.com')) {
  document.getElementById('masthead-positioner').style.visibility = 'hidden';
  // keep the Youtube logo/link visible
  document.getElementById('logo-container').style.visibility = 'visible';
} else if (domain.endsWith('quora.com')) {
  document.getElementsByClassName('SiteHeader')[0].style.visibility = 'hidden';
} else if (domain.endsWith('arstechnica.com')) {
  document.getElementById('masthead').style.visibility = 'hidden';
  // keep homepage link visible, but out of the way
  var home = document.getElementById('home-icon');
  home.style.visibility = 'visible';
  home.style.position = 'relative';
  home.style.left = '-16px';
} else if (domain.endsWith('knowyourmeme.com')) {
  document.getElementsByClassName('floating-bar')[0].style.visibility = 'hidden';
  document.querySelectorAll('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden'; // G+ icon
} else if (domain.endsWith('dailydot.com')) {
  document.getElementById('nav-bar').style.visibility = 'hidden';
} else if (domain.endsWith('stackexchange.com')
    || domain.endsWith('stackoverflow.com')
    || domain.endsWith('askubuntu.com')
    || domain.endsWith('superuser.com')
    || domain.endsWith('serverfault.com')
    || domain.endsWith('mathoverflow.net')) {
  document.getElementById('noscript-warning').style.visibility = 'hidden';
}
