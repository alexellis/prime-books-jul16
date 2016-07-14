"use strict"

class WordFrequency {
    _split(text) {
        return text.split(" ");
    }

    count(text) {
        const dict = {};
        const tokens = this._split(text);
        tokens.forEach(token => {
            if(Object.keys(dict).indexOf(token) == -1) {
                dict[token] = 0;
            }
            dict[token] = dict[token] + 1;
        });

        return dict;
    }
}

module.exports = WordFrequency;
