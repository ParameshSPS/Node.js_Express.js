#!/usr/bin/env node

const fs = require('fs');

const util = require('util');

// ------Method #2

const lstat = util.promisify(fs.lstat);

// ------Method #3

const { lstat } = fs.promises;


fs.readdir(process.cwd(), async (err, filenames) => {

    if (err) {
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(filename);
    });

    const allstats = await Promise.all(statPromises);

    for (let stats of allstats) {
        const index = allstats.indexOf(stats);

        console.log(filenames[index], stats.isFile());
    }
});

// -------Method #1

const lstat = (filename) => {
    return new Promise((resolve, reject) => {
        fs.lstat(filename, (err, stats) => {
            if (err) {
                reject(err);
            }

            resolve(stats);
        });
    });
};

// #emptyfolder false
// #index.js true
// #package-lock.json true
// #package.json true