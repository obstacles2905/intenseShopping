"use strict";

const Notebook = require("../models/Notebook");

class ResultController extends Notebook{

  async getResult(request, response) {

    const userPreferences = this._getUserPreferences(request);
    const notebooks = await this._getNotebooks();

    const suitableNotebooks = this._getSuitableNotebooks(userPreferences, notebooks);

    //response.render("advanced", {filters});
  }

  _getUserPreferences(request) {
    return request.body;
  }

  _getSuitableNotebooks(userPreferences, notebooks) {

  }

}

module.exports = ResultController;