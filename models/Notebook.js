"use strict";

const Mongo = require("../db/Mongo");

class Notebook extends Mongo {

  get NOTEBOOKS_COLLECTION() {
    return "notebooks";
  }

  async _getNotebooks() {
    this._getDbObject()
      .then(db => {
        db.collection(this.NOTEBOOKS_COLLECTION).find({}).toArray((err, result) => {
          if (err) {
            throw err;
          }

          return result;
        })
      })
  }


}

module.exports = Notebook;