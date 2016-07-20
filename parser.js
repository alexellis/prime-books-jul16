"use strict";

class Parser {

    popComma(text) {
      if(text.endsWith(",")) {
        return text.substring(0, text.length-1);
      }
      return text;
    }

    popFullstop(text) {
      if(text.endsWith(".")) {
        return text.substring(0, text.length-1);
      }
      return text;
    }


    popQuote(text) {
      if(text.endsWith("\"")) {
        return text.substring(0, text.length-1);
      }
      return text;
    }

    splitWhitespace(text) {
        let parts = text.split(" ");
        let allParts = [];

        parts.forEach((p) => {
          if(p.indexOf("\n") > -1) {
            let intermediates = p.split("\n");
            intermediates.forEach((intermediate) => {
              allParts.push(intermediate);
            });
          } else {
            allParts.push(p);
          }
        });

        return allParts;
    }

    parse(text) {
        let splits =  this.splitWhitespace(text);
        let tokens = [];
        splits.forEach((t)=> {
          let token = this.popComma(t);
          token = this.popFullstop(token);
          token = this.popQuote(token);
          
          if(token) {
            tokens.push(token);
          }
        });
        return tokens;
    }
};


module.exports = Parser;
