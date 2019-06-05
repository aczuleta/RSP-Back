"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _default = {
  Query: {
    messages: function messages(parent, args, _ref) {
      var models = _ref.models;
      return Object.values(models.messages);
    },
    message: function message(parent, _ref2, _ref3) {
      var id = _ref2.id;
      var models = _ref3.models;
      return models.messages[id];
    }
  },
  Mutation: {
    createMessage: function createMessage(parent, _ref4, _ref5) {
      var text = _ref4.text,
          userId = _ref4.userId;
      var me = _ref5.me,
          models = _ref5.models;
      var ide = (0, _v["default"])();
      var message = {
        id: ide,
        text: text,
        userId: userId
      };
      models.messages[ide] = message;
      models.users[userId].messageIds.push(ide);
      return message;
    },
    deleteMessage: function deleteMessage(parent, _ref6, _ref7) {
      var id = _ref6.id;
      var me = _ref7.me,
          models = _ref7.models;
      var target = models.messages[id];
      var rta;

      if (target) {
        rta = true;
        delete models.messages[i];
      } else {
        rta = false;
      }

      models.users.forEach(function (user) {
        var indice = user.messageIds.indexOf(id);
        if (indice > -1) user.messageIds.splice(indice, 1);
      });
      return rta;
    }
  },
  Message: {
    user: function user(message, args, _ref8) {
      var models = _ref8.models;
      return models.users[message.userId];
    }
  }
};
exports["default"] = _default;