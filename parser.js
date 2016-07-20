"use strict";

class Parser {

    stripWord(text) {
      var token = "";
      var stopChars = ["\"", ".", ",", "?", "\'", "!", ";", "(", ")", ":"];
      for(let i = 0; i < text.length; i++) {
        if(stopChars.indexOf(text[i])  == -1) {
          token += text[i];
        }
      }
      return token;
    }

    splitSeparators(text) {
      var all = [];
      var token = "";
      var stop = [" ", "\n", "-"];
      for(let i = 0; i <= text.length; i++) {
        if(stop.indexOf(text[i]) >- 1 || i == text.length) {
          if(token.length > 0) {
            all.push(token);
            token = "";
          }
        }
        else {
          token += text[i];
        }
      }
      return all;
    }

    parse(text) {
        let splits = this.splitSeparators(text);
        let tokens = [];
        splits.forEach((token) => {
          let word = this.stripWord(token);

          if(word) {
            tokens.push(word);
          }
        });
        return tokens;
    }
};


module.exports = Parser;
