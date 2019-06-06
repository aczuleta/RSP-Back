"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var dotenv = _interopRequireWildcard(require("dotenv"));

dotenv.config();
var path;

switch (process.env.NODE_ENV) {
  case "test":
    path = "".concat(__dirname, "/../../.env.test");
    break;

  case "production":
    path = "".concat(__dirname, "/../../.env");
    break;

  default:
    path = "".concat(__dirname, "/../../.env.development");
}

dotenv.config({
  path: path
});