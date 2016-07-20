"use strict";

const fs = require('fs');

let localFile = process.argv[2];

fs.readFile(localFile, "utf8", (err, text) => {
    if(!err) {
        console.log("In");
        let toks=text.split(" ")
        console.log("split")
        let head = {};
        toks.forEach((tok) => {
            head[tok] = (head[tok] || 0)+1;
        });
        console.log("iterated")
    }
});