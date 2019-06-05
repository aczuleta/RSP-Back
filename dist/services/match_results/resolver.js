"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = require("./model");

var _repository = require("./repository");

var resultRepository = (0, _repository.MatchResultRepository)();
var _default = {
  Query: {
    results: function () {
      var _results = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
        var winner, models, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                winner = _ref.winner;
                models = _ref2.models;
                _context.next = 4;
                return resultRepository.getPlayerMatches(winner);

              case 4:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function results(_x, _x2, _x3) {
        return _results.apply(this, arguments);
      }

      return results;
    }()
  },
  Mutation: {
    createResult: function () {
      var _createResult = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, _ref3, _ref4) {
        var player1, player2, winner, me, models, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                player1 = _ref3.player1, player2 = _ref3.player2, winner = _ref3.winner;
                me = _ref4.me, models = _ref4.models;
                _context2.prev = 2;
                result = (0, _model.matchResultModel)(player1, player2, winner);
                _context2.next = 6;
                return resultRepository.createResult(result);

              case 6:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                throw _context2.t0;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }));

      function createResult(_x4, _x5, _x6) {
        return _createResult.apply(this, arguments);
      }

      return createResult;
    }()
  }
};
exports["default"] = _default;