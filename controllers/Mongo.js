"use strict";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

class Mongo {
  constructor() {
    this._database = "intense_purchase";
    this._filtersCollection = "filters";
  }

  async _getFilters(category) {
    return new Promise((reject, resolve) => {

      MongoClient.connect(url, (err, dbObject) => {
        if (err) {
          return reject(err);
        }

        const selectedDatabase = dbObject.db("intense_purchase");

        selectedDatabase.collection("filters").find({weight: 1}).toArray((err, result) => {
          if (err) {
            throw err;
          }

          return result;
        })
      })

    })
  }

}

module.exports = Mongo;