"use strict"

const expect = require('chai').expect;
const sinon = require('sinon');

const Downloader = require('../downloader');


describe("Downloads", () => {
    var sut;
    var sandbox;
    var request;
    before(() => {
        sandbox = sinon.sandbox.create();
        request = {
            "get": sandbox.stub()
        }
        sut = new Downloader({"request": request});
    });

    it("a text file using request module", () => {
        let textFile = "Uncle Bob Martin suggests doing an extra 20 hours of training per week in your own time.";
        let textUrl = "http://bob.training/intro.txt";
    
        var error = null;
        var response = {};
        request.get.yields(error, response, textFile);
        let done = (text) => {

        };
        sut.download(textUrl, done);
        expect(request.get.calledOnce).to.be.true;

    });

});
