const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "toor",
  database: "intenseShopping"
});

class Mysql {

  get FILTERS_TABLE() {
    return "filters";
  }

  async _getFilters() {
    return new Promise((resolve, reject) =>
      pool.query(`SELECT * FROM ${this.FILTERS_TABLE}`, (err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result);
      })
    )
  }

  async _getSimpleFilters() {
    return new Promise((resolve, reject) =>
      pool.query(`SELECT * FROM ${this.FILTERS_TABLE} WHERE simple = 1`, (err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result);
      })
    )
  }

  async _getAdvancedFilters() {
    return new Promise((resolve, reject) =>
      pool.query(`SELECT * FROM ${this.FILTERS_TABLE} WHERE advanced = 1`, (err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result);
      })
    )
  }
}

module.exports = Mysql;