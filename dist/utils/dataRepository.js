'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var _globalMessages = require("./globalMessages");

var _ = _interopRequireWildcard(require("lodash"));

var db = (0, _db.Db)(); //Factory Function for a generic Data Repository

var dataRepository = function dataRepository(table) {
  var connection = db.connect(table);

  function getConnection() {
    return connection;
  }

  function getRawConnection() {
    return db.rawConnection();
  } //Generic create operation


  function create(_x) {
    return _create.apply(this, arguments);
  }

  function _create() {
    _create = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(obj) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var knex = connection;
                knex.insert(obj).then(function (rows) {
                  resolve(rows[0]);
                })["catch"](function (error) {
                  console.log(error);
                  reject(_globalMessages.messages.db.dbError);
                });
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _create.apply(this, arguments);
  }

  ; //Generic retrieve opration

  function retrieve() {
    return _retrieve.apply(this, arguments);
  }

  function _retrieve() {
    _retrieve = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var where,
          fields,
          page,
          rowsPerPage,
          orderBy,
          _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              where = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              fields = _args2.length > 1 ? _args2[1] : undefined;
              page = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 1;
              rowsPerPage = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 0;
              orderBy = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : [];
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                var whereOrder = {};
                var knex = connection;
                if (where !== {}) applyWheres(knex, where); //pagination

                if (page >= 1 && rowsPerPage > 0) {
                  knex.limit(rowsPerPage);
                  knex.offset(rowsPerPage * (page - 1));
                }

                if (orderBy.length > 0) {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = orderBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var order = _step.value;

                      if (order.includes(':')) {
                        knex.orderBy(order.split(':')[0], order.split(':')[1]);
                      } else {
                        knex.orderBy(order, 'ASC');
                      }
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                }

                knex.then(function (rows) {
                  resolve(rows);
                })["catch"](function (error) {
                  console.log(error);
                  reject(_globalMessages.messages.db.dbError);
                });
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _retrieve.apply(this, arguments);
  }

  ;

  function applyWheres(knex, where) {
    var specialWhere = {};
    var orWhere = {};

    for (var key in where) {
      if (key.includes(':') && !key.includes('or:')) {
        if (where[key] !== '' && where[key] !== undefined && where[key] !== null) {
          specialWhere[key.split(':')[0]] = {
            value: where[key],
            operation: key.split(':')[1]
          };
        }

        delete where[key];
      } else if (key.includes('or:')) {
        if (where[key] !== '' && where[key] !== undefined && where[key] !== null) {
          var _key = key.replace('or:', '');

          orWhere[_key.split(':')[0]] = {
            value: where[key],
            operation: _key.split(':')[1]
          };
        }

        delete where[key];
      }
    } //usual where


    for (var _key2 in where) {
      if (where[_key2] !== '' && where[_key2] !== undefined && where[_key2] !== null) knex.where(_key2, where[_key2]);
    }

    for (var _key3 in specialWhere) {
      knex.where(_key3, specialWhere[_key3].operation, specialWhere[_key3].value);
    }

    for (var _key4 in orWhere) {
      knex.orWhere(_key4, orWhere[_key4].operation, orWhere[_key4].value);
    }
  }
  /** 
   * 
   * //retrieve
  //update
  async function update(id, object) {
      var _this = this;
      return new Promise((resolve, reject) => {
          let where = {};
          let key = _this.key();
          where[key] = id;
          //actualizo la db
          _this.connection(_this.table)
              .where(where)
              .update(object)
              .then((rows) => {
                  resolve(rows);
              })
              .catch((error) => {
                  console.log(error);
                  reject(GlobalMessages.db.dbError);
              });
      });
  }
  //delete
  async function delete(id) {
      var _this = this;
      return new Promise((resolve, reject) => {
          let where = {};
          let key = _this.key();
          where[key] = id;
          //actualizo la db
          _this.connection(_this.table)
              .where(where)
              .del()
              .then((rows) => {
                  resolve(rows);
              })
              .catch((error) => {
                  console.log(error);
                  reject(GlobalMessages.db.dbError);
              });
      });
  }
  //otras funciones
  function key() {
      return _.findKey(this.schema.properties, (obj) => { return obj.primary === true; });
  }
    //hacer queries
  async function query(query, parameters) {
      var _this = this;
      return new Promise((resolve, reject) => {
          _this.connection.raw(query, parameters)
              .then((rows) => {
                  rows = rows.length > 0 ? rows[0] : [];
                  resolve(rows);
              })
              .catch((error) => {
                  console.log(error);
                  reject(GlobalMessages.db.dbError);
              });
      });
  }
   * 
  */


  return {
    create: create,
    getConnection: getConnection,
    retrieve: retrieve,
    getRawConnection: getRawConnection
  };
};

exports.dataRepository = dataRepository;