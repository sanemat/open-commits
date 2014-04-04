/*jshint strict:false, browser:true */
(function bookmarklet() {
  var elArray = [].slice.call(document.querySelectorAll('div[id^=commits-pushed] .commit-message a'), 0);
  var elFiltered = Array.prototype.filter.call(elArray, isCommitLink);
  var urls = elFiltered.map(function(el) { return el.getAttribute('href');});
  urls.map(function(el) { window.open(el); });
  function isCommitLink(el, index, array) {
    var className = 'message';
    if (el.classList){
      return el.classList.contains(className);
    } else{
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }
}());
