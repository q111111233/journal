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
