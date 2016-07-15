"use strict"

const request = require('request');
const WordFrequency = require('./wordFrequency');
const Parser = require('./parser');
const fs = require('fs');

let localFile = process.argv[2];

fs.readFile(localFile, "utf8", (err, text) => {
    if(!err) {
        let wordFrequency = new WordFrequency(new Parser());
        let results = wordFrequency.count(text);

        // debug output results without formatting.
        console.log(results);
    }
});
