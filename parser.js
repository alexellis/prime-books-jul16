"use strict";

class Parser {

    popComma(text) {
      if(text.endsWith(",")) {
        return text.substring(0, text.length-1);
      }
      return text;
    }

    parse(text) {
        let splits =  text.split(" ");
        let tokens = [];
        splits.forEach((t)=> {
          let token = this.popComma(t);
          if(token) {
            tokens.push(token);
          }
        });
        return tokens;
    }
};


module.exports = Parser;
