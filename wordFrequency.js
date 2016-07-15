"use strict"

class WordFrequency {

    constructor(parser) {
        this.parser = parser;
    }

    count(text) {
        const dict = {};
        const tokens = this.parser.parse(text);

        console.log(tokens);

        tokens.forEach(token => {
            let word = token.toLowerCase();
            // if(word.length) {
                if(Object.keys(dict).indexOf(word) == -1) {
                    dict[word] = 0;
                }
                dict[word] = dict[word] + 1;
            // }
        });

        return dict;
    }
}

module.exports = WordFrequency;
