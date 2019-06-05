"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchResultRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var _queries = require("./queries");

var matchResultRepository = (0, _dataRepository.dataRepository)("match");

var MatchResultRepository = function MatchResultRepository() {
  function createMatchResult(_x) {
    return _createMatchResult.apply(this, arguments);
  }

  function _createMatchResult() {
    _createMatchResult = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(result) {
      var newResult;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              newResult = matchResultRepository.getRawConnection();
              _context.next = 4;
              return newResult.raw(_queries.queries.insert_match_result, (0, _toConsumableArray2["default"])(Object.values(result)));

            case 4:
              newResult = _context.sent;
              return _context.abrupt("return", newResult[0].insertId);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _createMatchResult.apply(this, arguments);
  }

  function getPlayerMatches(_x2) {
    return _getPlayerMatches.apply(this, arguments);
  }

  function _getPlayerMatches() {
    _getPlayerMatches = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(playerName) {
      var results;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return matchResultRepository.retrieve({
                winner: playerName
              });

            case 3:
              results = _context2.sent;
              return _context2.abrupt("return", results);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _getPlayerMatches.apply(this, arguments);
  }

  return {
    createResult: createMatchResult,
    getPlayerMatches: getPlayerMatches
  };
};

exports.MatchResultRepository = MatchResultRepository;