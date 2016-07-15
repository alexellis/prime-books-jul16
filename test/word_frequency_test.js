"use strict"

const expect = require('chai').expect;
const WordFrequency = require('../wordFrequency');
const Parser = require('../parser');

describe("Word frequency", () => {
    var sut;
    before(() => {
        sut = new WordFrequency(new Parser());
    });

    it("finds a single word once", () => {
        let frequency = sut.count("train");

        expect(frequency["train"]).to.equal(1);
    });

    it("finds a word twice", () => {
        let frequency = sut.count("train train");

        expect(frequency["train"]).to.equal(2);
    });

    it("finds two different ocnes once each", () => {
        let frequency = sut.count("train yourself");

        expect(frequency["train"]).to.equal(1);
        expect(frequency["yourself"]).to.equal(1);
    });

    it("ignores case", () => {
        let frequency = sut.count("Train train TraIN");

        expect(frequency["train"]).to.equal(3); 
    });
});

