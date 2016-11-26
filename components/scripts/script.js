document.addEventListener("DOMContentLoaded", function() {
  var fullHeightElement = document.getElementsByTagName('body')[0];

  changeHeight = function() {
    var wheight = window.innerHeight;
    fullHeightElement.style.minHeight = wheight + "px";
  };

  changeHeight();

  window.addEventListener('resize', changeHeight);

});
