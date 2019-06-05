'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Db = void 0;

var _knex = _interopRequireDefault(require("knex"));

require('dotenv').config();

var connection;
var host = process.env.DB_HOST;
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var database = process.env.DB_DATABASE;

var Db = function Db() {
  function connect(table) {
    connection = (0, _knex["default"])(config())(table);
    return connection;
  }

  ;

  function rawConnection() {
    return (0, _knex["default"])(config());
  }

  function config() {
    return {
      client: 'mysql',
      connection: {
        host: host,
        user: user,
        password: password,
        db: database,
        database: database,
        dateStrings: 'date',
        pool: {
          min: 0,
          max: 5
        }
      }
    };
  }

  return {
    connect: connect,
    rawConnection: rawConnection
  };
};

exports.Db = Db;