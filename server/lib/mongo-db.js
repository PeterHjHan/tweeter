"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

const mongoDB = function () {

  MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
  
    console.log(`Connected to mongodb: ${MONGODB_URI}`);
  
  
    db.collection("tweets").find().each((err, result) => {
      // Lazy error handling:
      if (err) throw err;
  
      console.log(result);
    });
    db.close();
  });
}

const db = {
  tweets: mongoDB(),
}


module.exports = db;