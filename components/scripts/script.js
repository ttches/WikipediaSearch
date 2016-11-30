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
