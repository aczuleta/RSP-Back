"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = require("./model");

var _repository = require("./repository");

var rulesetRepository = (0, _repository.RulesetRepository)();
var _default = {
  Query: {
    rulesets: function () {
      var _rulesets = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
        var models, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _objectDestructuringEmpty2["default"])(_ref);
                models = _ref2.models;
                _context.prev = 2;
                _context.next = 5;
                return rulesetRepository.getRulesets();

              case 5:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function rulesets(_x, _x2, _x3) {
        return _rulesets.apply(this, arguments);
      }

      return rulesets;
    }(),
    rules: function () {
      var _rules = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, _ref3, _ref4) {
        var ruleset, models, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ruleset = _ref3.ruleset;
                models = _ref4.models;
                _context2.prev = 2;
                _context2.next = 5;
                return rulesetRepository.getRules(ruleset);

              case 5:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      function rules(_x4, _x5, _x6) {
        return _rules.apply(this, arguments);
      }

      return rules;
    }()
  },
  Mutation: {
    createRuleset: function () {
      var _createRuleset = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, _ref5, _ref6) {
        var name, moves, models, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = _ref5.name, moves = _ref5.moves;
                models = _ref6.models;
                _context3.prev = 2;
                result = (0, _model.rulesetModel)(name, moves);
                _context3.next = 6;
                return rulesetRepository.createRuleset(result);

              case 6:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                throw _context3.t0;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 10]]);
      }));

      function createRuleset(_x7, _x8, _x9) {
        return _createRuleset.apply(this, arguments);
      }

      return createRuleset;
    }()
  }
};
exports["default"] = _default;