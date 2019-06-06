"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Query: {
    users: function users(parent, args, _ref) {
      var models = _ref.models;
      return Object.values(models.users);
    },
    user: function user(parent, _ref2, _ref3) {
      var id = _ref2.id;
      var models = _ref3.models;
      return models.users[id];
    },
    me: function me(parent, args, _ref4) {
      var _me = _ref4.me,
          models = _ref4.models;
      return _me;
    }
  },
  User: {
    username: function username(user) {
      return "".concat(user.firstname, " ").concat(user.lastname);
    },
    messages: function messages(user, args, _ref5) {
      var models = _ref5.models;
      return Object.values(models.messages).filter(function (message) {
        return message.userId === user.id;
      });
    }
  }
};
exports["default"] = _default;