"use strict";

const Mongo = require("./Mongo");

class Advanced extends Mongo {

  async index(request, response) {

    const filters = await this._getFilters("advanced");
    response.render("advanced");
  }



}

module.exports = Advanced;