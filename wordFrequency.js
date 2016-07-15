"use strict"

class WordFrequency {

    constructor(parser) {
        this.parser = parser;
    }

    count(text) {
        const dict = {};
        const tokens = this.parser.parse(text);

        // console.log(tokens);

        tokens.forEach(token => {
            let word = token.toLowerCase();
            dict[word] = (dict[word] || 0) +1;
        });

        return dict;
    }
}

module.exports = WordFrequency;
