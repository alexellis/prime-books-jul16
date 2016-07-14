"use strict"

const request = require('request');
const Downloader = require('./downloader');
const WordFrequency = require("./wordFrequency");

let site = process.argv[2];

let downloader = new Downloader({"request": request});
downloader.download(site, (err, text)=> {
    if(!err) {
        let wordFrequency = new WordFrequency();
        let results = wordFrequency.count(text);

        // debug output results without formatting.
        console.log(results);
    }
});