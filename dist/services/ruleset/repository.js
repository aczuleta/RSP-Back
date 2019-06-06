"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RulesetRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var _queries = require("./queries");

var _model = require("./model");

var _model2 = require("../moves/model");

var rulesRepository = (0, _dataRepository.dataRepository)("rules");
var rulesetRepository = (0, _dataRepository.dataRepository)("ruleset");

var RulesetRepository = function RulesetRepository() {
  function createRuleset(_x) {
    return _createRuleset.apply(this, arguments);
  }

  function _createRuleset() {
    _createRuleset = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(ruleset) {
      var newRuleset;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return rulesetRepository.getRawConnection().raw(_queries.queries.insert_ruleset, [ruleset.name]);

            case 3:
              newRuleset = _context2.sent;
              newRuleset = newRuleset[0].insertId;
              ruleset.moves.forEach(
              /*#__PURE__*/
              function () {
                var _ref = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee(id) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return rulesRepository.getRawConnection().raw(_queries.queries.insert_rule, [newRuleset, id]);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
              return _context2.abrupt("return", newRuleset);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return _createRuleset.apply(this, arguments);
  }

  function getRulesets() {
    return _getRulesets.apply(this, arguments);
  }

  function _getRulesets() {
    _getRulesets = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var results;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return rulesetRepository.retrieve();

            case 3:
              results = _context3.sent;
              return _context3.abrupt("return", results);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return _getRulesets.apply(this, arguments);
  }

  function getRules(_x2) {
    return _getRules.apply(this, arguments);
  }

  function _getRules() {
    _getRules = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(id) {
      var results, result, flag;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return rulesetRepository.getRawConnection().raw(_queries.queries.get_rules, [id]);

            case 3:
              results = _context4.sent;
              results = results[0];
              result = (0, _model.ruleModel)(results[0].id_ruleset, results[0].ruleset_name, []);
              results.forEach(function (move) {
                if (flag != move.id_killer) {
                  flag = move.id_killer;
                  result.moves.push((0, _model2.moveModel)(move.move_killer, move.image_route, [(0, _model2.moveModel)(move.move_killed, "", [])], move.id_killer));
                } else {
                  result.moves[result.moves.length - 1].kills.push((0, _model2.moveModel)(move.move_killed, "", []));
                }
              });
              return _context4.abrupt("return", result);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return _getRules.apply(this, arguments);
  }

  return {
    createRuleset: createRuleset,
    getRulesets: getRulesets,
    getRules: getRules
  };
};

exports.RulesetRepository = RulesetRepository;