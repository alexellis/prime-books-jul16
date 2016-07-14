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

    it("finds 3 is a prime number", () => {
        expect(sut.isPrime(3)).to.be.true;
    });

    it("verifies range up to 13 of primes", () => {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
        for(let n = 0; n <= primes[primes.length-1]; n++) {
            const expectedPrime = primes.indexOf(n) >- 1;
            // console.log(n,expectedPrime,sut.isPrime(n))
            expect(sut.isPrime(n)).to.equal(expectedPrime);
        }
    });

});

