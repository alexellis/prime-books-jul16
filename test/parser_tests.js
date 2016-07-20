"use strict"

const expect = require('chai').expect;
const Parser = require('../parser');

describe("Parses strings", () => {
    var sut;
    before(() => {
        sut = new Parser();
    });

    it("by removing closing bracket", () => {
        var tokens = sut.parse("alex)");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("alex");
    });

    it("by removing opening bracket", () => {
        var tokens = sut.parse("(alex");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("alex");
    });

    it("by ignoring colon", () => {
        var tokens = sut.parse("alex:");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("alex");
    });

    it("by ignoring semicolon", () => {
        var tokens = sut.parse("alex;");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("alex");
    });

    it("by removing exclamation marks", () => {
        var tokens = sut.parse("alex!");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("alex");
    });

    it("by removing single quotes", () => {
        var tokens = sut.parse("ab'");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("ab");
    });

    it("by removing question marks", () => {
        var tokens = sut.parse("ab?");
        expect(tokens.length).to.equal(1);
        expect(tokens[0]).to.equal("ab");
    });


    it("by separating -- into two tokens", () => {
        var tokens = sut.parse("a--b");
        expect(tokens.length).to.equal(2);
        expect(tokens[0]).to.equal("a");
        expect(tokens[1]).to.equal("b");
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
