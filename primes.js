"use strict"

class Primes {
    isPrime(n) {
        let result = true;
        const square = Math.sqrt(n);
        for(let i = 2; i <= square; i++) {
            if(n % i == 0) {
                result = false;
                break; 
            }
        }
        return result && n >1;
    }
}

module.exports = Primes;