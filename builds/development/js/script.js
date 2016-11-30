(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", function() {
  //Creates a min height equal to the window height
  var fullHeightElement = document.getElementsByTagName('body')[0];

  changeHeight = function() {
    var wheight = window.innerHeight;
    fullHeightElement.style.minHeight = wheight + "px";
  };

  changeHeight();

  window.addEventListener('resize', changeHeight);

  //Selects and sends Search
  function logText() {
    console.log(document.getElementById("text-input").value);
  }

  document.getElementById("text-input").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      logText();
    }
  }, false);
});

},{}]},{},[1])