"use strict";

var checkForIE = function checkForIE() {
  var userAgent = window.navigator.userAgent;
  var msie = userAgent.indexOf("MSIE ");
  if (msie > 0) {
    //IE 10 or older
    return parseInt(userAgent.substring(msie + 5, userAgent.indexOf(".", misie)), 10);
  }
  var trident = userAgent.indexOf("Trident/");
  if (trident > 0) {
    //IE 11 => return version number
    var rv = userAgent.indexOf("rv:");
    return parseInt(userAgent.substring(rv + 3, userAgent.indexOf(".", rv)), 10);
  }
  return false;
};

var isMSLegacy = function isMSLegacy() {
  var MSLegacy = checkForIE();
};

if (MSLegacy !== false) {
  var insert = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.setAttribute("src", "https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2");
  insert.appendChild(script);
}

window.addEventListener("DOMContentLoaded", function () {
  if (MSLegacy !== false) {
    cssVars();
  }
});

// https://ttntm.me/blog/using-css-variables-internet-explorer/