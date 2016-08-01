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
