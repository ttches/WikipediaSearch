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
  var api = 'https://www.wikipedia.org//w/api.php?action=opensearch&format=json&search=test',
    quoteBank = [];

    //watches for enter to be pressed as a search
    document.getElementById("text-input").addEventListener("keydown", function(e) {
      if (e.keyCode == 13) {
        logText();//api function(document.getElementById("text-input").value)
      }
    }, false);

  function logText() {
    console.log(document.getElementById("text-input").value);
  }

  function truncFirstSentence(str) {
    var periodIndex = str.indexOf('.');
    if (periodIndex >= 0) {
      return (str.substring(0, periodIndex + 1));
    } else {
      return str;
    }
  }

//api function
  $.getJSON('https://www.wikipedia.org//w/api.php?action=opensearch&format=json&search=test&callback=?', function(data) {
    data.forEach(function(val) {
      quoteBank.push(val);
    });
    console.log(quoteBank[1][1],quoteBank[1][2]);
    //createHTML(quoteBank)
  });

  /* want to return
  function createHTML
    for ( var i = 0; i < quotebank[1]; i++)
      <a href="quotebank[3][i]"><h2>  quotebank[1][i] <h2>
      <p> truncFirstSentence(quoteBank[2][i]) <p>
  */
});
