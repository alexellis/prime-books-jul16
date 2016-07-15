"use strict"

module.exports = class Downloader {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }

    download(url, done) {
        return this.dependencies.request.get(url, (err, res, body) => {
            return done(err, body);
        });
    }
}
