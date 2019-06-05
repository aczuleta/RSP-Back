"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    \n    extend type Query {\n        moves: [move]!\n    }\n\n    extend type Mutation {\n        createMove(name: String!, imageRoute: String, kills:[ID]): ID!,\n        editMove(id:ID!, name:String!, imageRoute:String!, kills: [ID]!): ID!\n    }\n\n    type move {\n        id: ID!\n        name: String!\n        imageRoute: String!\n        kills: [move]!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;