"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleModel = exports.rulesetModel = void 0;

var rulesetModel = function rulesetModel(name, moves) {
  return {
    name: name,
    moves: moves
  };
};

exports.rulesetModel = rulesetModel;

var ruleModel = function ruleModel(idRuleset, rulesetName, moves) {
  return {
    idRuleset: idRuleset,
    rulesetName: rulesetName,
    moves: moves
  };
};

exports.ruleModel = ruleModel;