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

var summaryRepository = (0, _repository.PlayerSummaryRepository)();
var _default = {
  Query: {
    playerSummaries: function () {
      var _playerSummaries = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
        var models, result, summaries;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _objectDestructuringEmpty2["default"])(_ref);
                models = _ref2.models;
                _context.prev = 2;
                result = [];
                _context.next = 6;
                return summaryRepository.getPlayerSummaries();

              case 6:
                summaries = _context.sent;
                summaries.forEach(function (summary) {
                  var current = (0, _model.playerSummaryModel)(summary.winner, summary.total);
                  result.push(current);
                });
                return _context.abrupt("return", result);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function playerSummaries(_x, _x2, _x3) {
        return _playerSummaries.apply(this, arguments);
      }

      return playerSummaries;
    }()
  }
};
exports["default"] = _default;