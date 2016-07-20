# prime-books-jul16

This is an exercise in TDD with Node.js.

* 1) We download a text file
* 2) Parse it into tokens
* 3) Carry out word-frequency analysis
* 4) Print out frequencies along with whether each is a Prime number or not

**Todo:**

Additional work in step 2 is required to add tests for more edge cases along with step 4 to piece together the prime checkout with the output from the word frequency analyzer.


### Running the unit tests

To install depedencies type in:

`npm install`

Then to run the unit tests type in `npm test`

#### Code coverage

To produce code coverage run the following command through `npm` then inspect the coverage directory:

```
$ npm run test-coverage
```

### Running the example:

```
$ npm start -- https://wordpress.org/plugins/about/readme.txt
```

The URL can be changed and the code can be invoked directory replacing `npm start` by `node app.js` - the first argument is the URL of the text file to be downloaded.

A much longer document can be found below:

[Railway Children story](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt)
