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

var _function = require("./function");

var _model = require("./model");

var _queries = require("./queries");

var moveRepository = (0, _dataRepository.dataRepository)("move");
var killsRepository = (0, _dataRepository.dataRepository)("killer_rule");

var MatchResultRepository = function MatchResultRepository() {
  function createMove(_x) {
    return _createMove.apply(this, arguments);
  }

  function _createMove() {
    _createMove = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(move) {
      var url, sMove, newMove;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!move.imageRoute) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return (0, _function.movesFunction)().uploadToS3(move.imageRoute, move.name);

            case 4:
              _context2.t0 = _context2.sent;
              _context2.next = 8;
              break;

            case 7:
              _context2.t0 = "";

            case 8:
              url = _context2.t0;
              url = url ? url.imageUrl : "";
              sMove = (0, _model.simpleMove)(move.name, url);
              _context2.next = 13;
              return moveRepository.getRawConnection().raw(_queries.queries.insert_move, (0, _toConsumableArray2["default"])(Object.values(sMove)));

            case 13:
              newMove = _context2.sent;
              newMove = newMove[0].insertId;

              if (move.kills) {
                move.kills.forEach(
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee(id) {
                    var killerMove;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            killerMove = (0, _model.moveKiller)(+newMove, +id);
                            _context.next = 3;
                            return killsRepository.getRawConnection().raw(_queries.queries.insert_killer_move, (0, _toConsumableArray2["default"])(Object.values(killerMove)));

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }

              return _context2.abrupt("return", newMove);

            case 19:
              _context2.prev = 19;
              _context2.t1 = _context2["catch"](0);
              throw _context2.t1;

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }));
    return _createMove.apply(this, arguments);
  }

  function editMove(_x2, _x3) {
    return _editMove.apply(this, arguments);
  }

  function _editMove() {
    _editMove = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(id, move) {
      var url, sMove, newMove;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (!move.imageRoute.includes("data:image/png;base64")) {
                _context4.next = 8;
                break;
              }

              _context4.next = 4;
              return (0, _function.movesFunction)().uploadToS3(move.imageRoute, move.name);

            case 4:
              url = _context4.sent;
              url = url.imageUrl;
              _context4.next = 9;
              break;

            case 8:
              url = move.imageRoute;

            case 9:
              sMove = (0, _model.simpleMove)(move.name, url);
              _context4.next = 12;
              return moveRepository.getRawConnection().raw(_queries.queries.update_move, [].concat((0, _toConsumableArray2["default"])(Object.values(sMove)), [+id]));

            case 12:
              newMove = _context4.sent;

              if (move.kills) {
                move.kills.forEach(
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee3(idKilled) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return killsRepository.getRawConnection().raw(_queries.queries.update_killer_move, [+idKilled, +id]);

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

              return _context4.abrupt("return", id);

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 17]]);
    }));
    return _editMove.apply(this, arguments);
  }

  function getMoves() {
    return _getMoves.apply(this, arguments);
  }

  function _getMoves() {
    _getMoves = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var results;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return moveRepository.retrieve();

            case 3:
              results = _context5.sent;
              return _context5.abrupt("return", results);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return _getMoves.apply(this, arguments);
  }

  return {
    getMoves: getMoves,
    createMove: createMove,
    editMove: editMove
  };
};

exports.MatchResultRepository = MatchResultRepository;