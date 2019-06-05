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

var matchResultRepository = (0, _repository.MatchResultRepository)();
var _default = {
  Query: {
    moves: function () {
      var _moves = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, _ref, _ref2) {
        var models, result, _moves2;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _objectDestructuringEmpty2["default"])(_ref);
                models = _ref2.models;
                _context.prev = 2;
                result = [];
                _context.next = 6;
                return matchResultRepository.getMoves();

              case 6:
                _moves2 = _context.sent;

                _moves2.forEach(function (move) {
                  var current = (0, _model.moveModel)(move.name, move.image_route, [], move.id);
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

      function moves(_x, _x2, _x3) {
        return _moves.apply(this, arguments);
      }

      return moves;
    }()
  },
  Mutation: {
    createMove: function () {
      var _createMove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, _ref3, _ref4) {
        var name, imageRoute, kills, models, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _ref3.name, imageRoute = _ref3.imageRoute, kills = _ref3.kills;
                models = _ref4.models;
                _context2.prev = 2;
                result = (0, _model.moveModel)(name, imageRoute, kills);
                _context2.next = 6;
                return matchResultRepository.createMove(result);

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

      function createMove(_x4, _x5, _x6) {
        return _createMove.apply(this, arguments);
      }

      return createMove;
    }(),
    editMove: function () {
      var _editMove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, _ref5, _ref6) {
        var id, name, imageRoute, kills, models, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref5.id, name = _ref5.name, imageRoute = _ref5.imageRoute, kills = _ref5.kills;
                models = _ref6.models;
                _context3.prev = 2;
                result = (0, _model.moveModel)(name, imageRoute, kills);
                _context3.next = 6;
                return matchResultRepository.editMove(id, result);

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

      function editMove(_x7, _x8, _x9) {
        return _editMove.apply(this, arguments);
      }

      return editMove;
    }()
  }
};
exports["default"] = _default;