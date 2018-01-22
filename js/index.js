$( document ).ready(function() {
  
  function getQuote(){
    var quotes = ["'So many books, so little time.'- Frank Zappa", "'It's discouraging to think how many people are shocked by honesty and how few by deceit.' - Noël Coward", "'Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'- C.S. Lewis"];
    var randomNumber = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNumber];
    
    $(".quote").text(randomQuote);
  }
    
    $(".btn").on("click", function() {
      getQuote();
    });


});