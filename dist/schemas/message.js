"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    extend type Query {\n        messages: [Message!]!\n        message(id: ID!): Message!\n    }\n    type Message {\n        id: ID!\n        text: String!\n        user: User!\n    }\n    extend type Mutation {\n        createMessage(text: String!, userId:ID!): Message!\n        deleteMessage(id: ID!): Boolean!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;