"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _fs = _interopRequireDefault(require("fs"));

var _user = _interopRequireDefault(require("./user"));

var _message = _interopRequireDefault(require("./message"));

var _schema = _interopRequireDefault(require("../services/match_results/schema"));

var _schema2 = _interopRequireDefault(require("../services/player_summary/schema"));

var _schema3 = _interopRequireDefault(require("../services/moves/schema"));

var _schema4 = _interopRequireDefault(require("../services/ruleset/schema"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dirServices = '../services';
var linkSchema = (0, _apolloServerExpress.gql)(_templateObject());
var _exports = [linkSchema];
var _default = [linkSchema, _user["default"], _message["default"], _schema["default"], _schema2["default"], _schema3["default"], _schema4["default"]];
exports["default"] = _default;