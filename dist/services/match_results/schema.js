"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    \n    extend type Query {\n        results(winner:String!): [MatchResult]!\n    }\n\n    type MatchResult {\n        id: ID!\n        player1: String!\n        player2: String!\n        winner: String!\n    }\n\n    extend type Mutation {\n        createResult(player1: String!, player2: String!, winner:String!): ID!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;