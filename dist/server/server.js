"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;

var _express = _interopRequireDefault(require("express"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _apolloServerExpress = require("apollo-server-express");

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _schema = _interopRequireDefault(require("../schemas/schema"));

var _resolver = _interopRequireDefault(require("../resolvers/resolver"));

var _models = _interopRequireDefault(require("../models"));

var Server = function Server() {
  require('dotenv').config();

  var app = (0, _express["default"])();
  app.use((0, _cors["default"])());
  app.use((0, _helmet["default"])());
  app.use(_helmet["default"].noCache());
  app.use(_helmet["default"].frameguard());
  app.use(_helmet["default"].noSniff());
  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  app.use(_bodyParser["default"].text());
  app.use(_bodyParser["default"].json({
    type: 'application/json'
  }));
  var server = new _apolloServerExpress.ApolloServer({
    typeDefs: _schema["default"],
    resolvers: _resolver["default"],
    context: {
      models: _models["default"],
      me: _models["default"].users[1]
    }
  });

  function start() {
    server.applyMiddleware({
      app: app,
      path: '/graphql'
    });
    app.listen({
      port: 8000
    }, function () {
      console.log('Apollo Server on http://localhost:8000/graphql');
    });
  }

  return {
    start: start()
  };
};

exports.Server = Server;