"use strict";
const MongoClient = require("mongodb").MongoClient;

class Mongo {
  constructor() {
    this._url = "mongodb://localhost:27017/";
  }

  get DATABASE() {
    return "intenseShopping";
  }

  async _getDbObject() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this._url, (err, dbObject) => {
        if (err) {
          return reject(err);
        }

        resolve(dbObject.db(this.DATABASE));
      })
    })
  }

}

module.exports = Mongo;