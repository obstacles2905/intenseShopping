"use strict";

const Mysql = require("../db/Mysql");

class Category extends Mysql {

  async renderPage(request, response) {
    response.render("category");
  }
}

module.exports = Category;