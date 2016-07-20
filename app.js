"use strict"

const request = require('request');
const Downloader = require('./downloader');
const WordFrequency = require("./wordFrequency");
const Parser = require('./parser');

let site = process.argv[2];

let downloader = new Downloader({"request": request});
downloader.download(site, (err, text) => {
    if(!err) {
        let wordFrequency = new WordFrequency(new Parser());
        let results = wordFrequency.count(text);
        // debug output results without formatting.
        console.log(results);
    }
});
