"use strict"

const expect = require('chai').expect;
const sinon = require('sinon');

const Downloader = require('../downloader');

describe("Downloads", () => {
    var sut;
    var sandbox;
    var request;
    var done;
    const ERROR_INDEX = 0;

    before(() => {
        sandbox = sinon.sandbox.create();
        request = {
            "get": sandbox.stub()
        }
        sut = new Downloader({"request": request});
        done = sandbox.spy();
    });

    afterEach(() => {
        sandbox.reset();
    });

    it("a text file using request module", () => {
        let textFile = "Uncle Bob Martin suggests doing an extra 20 hours of training per week in your own time.";
        let textUrl = "http://bob.training/intro.txt";

        var error = null;
        var response = {};
        request.get.yields(error, response, textFile);

        sut.download(textUrl, done);
        expect(request.get.calledOnce).to.be.true;
        expect(done.getCall(0).args[ERROR_INDEX]).not.to.exist;
    });

    it("a text file using request module but gets and error", () => {
        let textUrl = "http://bob.training/outro.txt";

        var error = "No such file";
        var response = {};
        var textFile;
        request.get.yields(error, response, textFile);

        sut.download(textUrl, done);
        expect(request.get.calledOnce).to.be.true;
        expect(done.getCall(0).args[ERROR_INDEX]).to.exist;
    });

});
