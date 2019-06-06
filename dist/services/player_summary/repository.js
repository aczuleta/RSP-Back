"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerSummaryRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataRepository = require("../../utils/dataRepository");

var playerSummaryRepository = (0, _dataRepository.dataRepository)("match");

var PlayerSummaryRepository = function PlayerSummaryRepository() {
  function getPlayerSummaries() {
    return _getPlayerSummaries.apply(this, arguments);
  }

  function _getPlayerSummaries() {
    _getPlayerSummaries = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var connection, summaries;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              connection = playerSummaryRepository.getConnection();
              _context.next = 4;
              return connection.count({
                total: "id"
              }).select("winner").groupBy("winner");

            case 4:
              summaries = _context.sent;
              return _context.abrupt("return", summaries);

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
    return _getPlayerSummaries.apply(this, arguments);
  }

  return {
    getPlayerSummaries: getPlayerSummaries
  };
};

exports.PlayerSummaryRepository = PlayerSummaryRepository;