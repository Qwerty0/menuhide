String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
if (document.domain.endsWith('twitter.com')) {
  $('.topbar.js-topbar')[0].style.visibility = 'hidden';
} else if (document.domain.endsWith('knowyourmeme.com')) {
  $('.g-plusone-wrapper iframe')[0].style.visibility = 'hidden';
}