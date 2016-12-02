document.addEventListener("DOMContentLoaded", function() {
  //Creates a min height equal to the window height
  var fullHeightElement = document.getElementsByTagName('body')[0];

  changeHeight = function() {
    var wheight = window.innerHeight;
    fullHeightElement.style.minHeight = wheight + "px";
  };

  changeHeight();

  window.addEventListener('resize', changeHeight);

  //
  //Selects and sends Search
  //
  var api = 'https://www.wikipedia.org//w/api.php?action=opensearch&format=json&search=',
    searchBank = [];

  //watches for enter to be pressed as a search
  document.getElementById("text-input").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      var searchTerm = document.getElementById("text-input").value;
      searchBank = [];
      buildSearchBank(searchTerm.replace(" ", "+"));//api function(document.getElementById("text-input").value)
    }
  }, false);

  //api function
  function buildSearchBank(search) {
    $.getJSON(api + search + "&callback=?", function(data) {
      data.forEach(function(val) {
        searchBank.push(val);
      });
      createHTML(searchBank);
      document.getElementsByTagName('header')[0].style.paddingTop='0';
    });
  }

  //removes padding from header

  //Only uses first sentence of returned API
  function truncFirstSentence(str) {
    var periodIndex = str.indexOf('. ');
    if (periodIndex >= 0) {
      return (str.substring(0, periodIndex + 1));
    } else {
      return str;
    }
  }

  //appends html from search bank
  function createHTML(bank) {
    var mainHTML = document.getElementsByTagName('main')[0];
    mainHTML.innerHTML = "";
    for (var i = 0; i < bank[1].length; i++) {
      mainHTML.insertAdjacentHTML('beforeend',
      `<a href="` + bank[3][i] + `">
        <article>
          <h2>` + bank[1][i] + `</h2>
          <p>` + truncFirstSentence(bank[2][i]) + `</p>
        </article>
      </a>`);
    }
  }

  //buildSearchBank("test");
});
