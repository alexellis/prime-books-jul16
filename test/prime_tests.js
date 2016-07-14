"use strict"

const expect = require('chai').expect;
const Primes = require('../primes');

describe("prime numbers", () => {
    var sut;
    before(() => {
        sut = new Primes();
    });

    it("finds 1 is not a prime number", () => {
        expect(sut.isPrime(1)).to.be.false;
    });
    it("finds 2 is a prime number", () => {
        expect(sut.isPrime(2)).to.be.true;
    });

});

