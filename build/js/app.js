(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowelsConsonants = function() {
  var countVowel = 0;
  var countConsonant = 0;
  var vowels = ["a","e","i","o","u"];
  var punct = [" ",".",",",";",":","!","'",'"'];
  var characters = this.body.split("");
  characters.forEach(function(a) {
    if(vowels.indexOf(a)!=-1){
      countVowel += 1;
    }
    else if(punct.indexOf(a)==-1) {
      countConsonant += 1;
    }
  });
  return [countVowel, countConsonant];
};

Entry.prototype.getTeaser = function() {
  var sentence = this.body.split(".")[0].split("?")[0].split("!")[0];
  if (sentence.split(" ").length <= 8){
    return sentence;
  }
  else {
    var result = "";
    for (var i=0; i<8; i++){
      result += " " + sentence.split(" ")[i];
    }
    return result;
  }
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleEntry = new Entry(title, body);
    var output = simpleEntry.countWords();
    var count = simpleEntry.vowelsConsonants();
    var firstSentence = simpleEntry.getTeaser();
    $('#solution').append("<li>" + output + "</li>");
    $('#solution').append("<li>" + count + "</li>");
    $('#solution').append("<li>" + firstSentence + "</li>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
