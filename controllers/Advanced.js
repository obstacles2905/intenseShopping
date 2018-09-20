"use strict";

const Mysql = require("../db/Mysql");

class Advanced extends Mysql {

  async index(request, response) {

    const filters = await this._getAdvancedFilters();
    response.render("advanced", {filters});
  }

}

module.exports = Advanced;