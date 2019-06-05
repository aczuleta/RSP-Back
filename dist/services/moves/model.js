"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveKiller = exports.simpleMove = exports.moveModel = void 0;

var moveModel = function moveModel(name, imageRoute, kills) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    id: id,
    name: name,
    imageRoute: imageRoute,
    kills: kills
  };
};

exports.moveModel = moveModel;

var simpleMove = function simpleMove(name, image_route) {
  return {
    name: name,
    image_route: image_route
  };
};

exports.simpleMove = simpleMove;

var moveKiller = function moveKiller(id_killer, id_killed) {
  return {
    id_killer: id_killer,
    id_killed: id_killed
  };
};

exports.moveKiller = moveKiller;