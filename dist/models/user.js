"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var user = function user(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Message, {
      onDelete: 'CASCADE'
    });
  };

  return User;
};

var _default = user;
exports["default"] = _default;