"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user"));

var _message = _interopRequireDefault(require("./message"));

var _resolver = _interopRequireDefault(require("../services/match_results/resolver"));

var _resolver2 = _interopRequireDefault(require("../services/player_summary/resolver"));

var _resolver3 = _interopRequireDefault(require("../services/moves/resolver"));

var _resolver4 = _interopRequireDefault(require("../services/ruleset/resolver"));

var _default = [_user["default"], _message["default"], _resolver["default"], _resolver2["default"], _resolver3["default"], _resolver4["default"]];
exports["default"] = _default;