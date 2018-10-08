"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
const db = {
  tweets: require("../data-files/initial-tweets")
}

module.exports = db;

// console.log(db.tweets);
console.log(db.tweets[0].user);