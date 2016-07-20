"use strict"

const request = require('request');
const Downloader = require('./downloader');
const WordFrequency = require("./wordFrequency");
const Parser = require('./parser');
const Primes = require('./primes');

let site = process.argv[2];
let primes = new Primes();
let downloader = new Downloader({"request": request});

downloader.download(site, (err, text) => {
    if(!err) {
        let wordFrequency = new WordFrequency(new Parser());
        let results = wordFrequency.count(text);
        // debug output results without formatting.
        Object.keys(results).forEach((word) => {
          let frequency = results[word];
          console.log(word + ", count=" + results[word] + ", prime=" + primes.isPrime(frequency));
        });
        // console.log(results);
    }
});
