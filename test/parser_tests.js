"use strict"

const expect = require('chai').expect;
const Parser = require('../parser');

describe("Parses strings", () => {
    var sut;
    before(() => {
        sut = new Parser();
    });

    it("by separating newlines into tokens", () => {
        var tokens = sut.parse("a\nb");
        expect(tokens.length).to.equal(2);
        expect(tokens[0]).to.equal("a");
        expect(tokens[1]).to.equal("b");
    });

    it("by splitting out spaces into tokens", () => {
        var tokens = sut.parse("a b");
        expect(tokens.length).to.equal(2);
        expect(tokens[0]).to.equal("a");
        expect(tokens[1]).to.equal("b");
    });

    it("by removing quote (\")", () => {
        var tokens = sut.parse("b\"");

        expect(tokens.length).to.equal(1);

        expect(tokens[0]).to.equal("b");
    });

    it("by removing period (.)", () => {
        var tokens = sut.parse("a. b");

        expect(tokens.length).to.equal(2);

        expect(tokens[0]).to.equal("a");
        expect(tokens[1]).to.equal("b");
    });

    it("by removing commas (,)", () => {
        var tokens = sut.parse("a, b");

        expect(tokens.length).to.equal(2);

        expect(tokens[0]).to.equal("a");
        expect(tokens[1]).to.equal("b");
    });

});
