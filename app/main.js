/*jshint strict:false, browser:true */
(function bookmarklet() {
  var elArray = [].slice.call(document.querySelectorAll('div[id^=commits-pushed] .commit-message a'), 0);
  var urls = elArray.map(function(el) { return el.getAttribute('href');});
  urls.map(function(el) { window.open(el); });
}());
