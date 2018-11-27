/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*
Create an array of objects with properties for quote, source, citation and year. The only required properties 
are quote and source. Citation and year are optional, so not all objects will have those two properties.
*/

var quotes = [
  {
    quote: "I am serious. And don’t call me Shirley.",
    source: "Leslie Nielsen",
    citation: "Airplane",
    year: 1980
  },
  {
    quote:
      "I’m about to do to you what Limp Bizkit did to music in the late ’90s.",
    source: "Ryan Reynolds",
    citation: "Deadpool",
    year: 2016
  },
  {
    quote:
      "Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.",
    source: "Taron Egerton",
    citation: "Kingsman: The Secret Service",
    year: 2014
  },
  {
    quote:
      "It’s not a man purse. It’s called a satchel. Indiana Jones wears one.",
    source: "Zach Galifianakis",
    citation: "The Hangover",
    year: 2009
  },
  {
    quote: "This is not ‘Nam. This is bowling. There are rules.",
    source: "John Goodman",
    citation: "The Big Lebowski",
    year: 1998
  },
  {
    quote: "Your mother was a hamster and your father smelt of elderberries.",
    source: "John Cleese",
    year: 1975
  },
  {
    quote:
      "There are 106 miles to Chicago, we have a full tank of gas, half a pack of cigarettes, it’s dark, and we’re wearing sunglasses.",
    source: "John Belushi"
  },
  {
    quote: "I am your father’s brother’s nephew’s cousin’s former roommate.",
    source: "Rick Moranis",
    citation: "Spaceballs"
  }
];

/*
Create a new function that takes an array as a paramter. In the function, create a variable that
creates a random number between 0 and the amount of objects in the array. Then create a variable that takes the 
array argument and calls the object assigned to the index defined by the random number. Finally, return the that last variable.
I didn't do the "+ 1" at the end of the randomNumber equation because it's a zero based index.
*/

function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  var quoteObject = array[randomNumber];
  return quoteObject;
}

/*
Create a new function and call the getRandomQuote, then build out the message you want to display in the 
web-browser using string concatination. Use an 'if' conditional statement that includes the citation or year if 
those properties exist.
*/

/*
I'm wondering if I could have done the citation and year properties in a differant way. Using two 'if-statements'
seems a little inefficient
*/

function printQuote() {
  newQuote = getRandomQuote(quotes);
  var html = "";
  html += '<p class="quote">' + newQuote.quote + "</p>";
  html += '<p class="source">' + newQuote.source;
  if (newQuote.citation != null) {
    html += '<span class="citation">' + newQuote.citation + "</span>";
  }
  if (newQuote.year != null) {
    html += '<span class="year">' + newQuote.year + "</span>";
  }
  html += "</p>";
  document.getElementById("quote-box").innerHTML = html;
}

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
