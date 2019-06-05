"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movesFunction = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _moment = _interopRequireDefault(require("moment"));

require('dotenv').config();

var movesFunction = function movesFunction() {
  var S3; // Set the region 

  var REGION = 'us-east-1';
  var paramsS3 = {
    Bucket: 'techtest-aczc',
    ACL: 'public-read',
    ContentEncoding: 'base64'
  };

  function loadAwsConfig() {
    return _loadAwsConfig.apply(this, arguments);
  }

  function _loadAwsConfig() {
    _loadAwsConfig = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _awsSdk["default"].config.update({
                accessKeyId: process.env.AWS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_KEY
              });

              _awsSdk["default"].config.update({
                region: REGION
              });

              S3 = new _awsSdk["default"].S3();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadAwsConfig.apply(this, arguments);
  }

  function uploadToS3(_x, _x2) {
    return _uploadToS.apply(this, arguments);
  }

  function _uploadToS() {
    _uploadToS = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(imageBase64, moveName) {
      var base64Data, type, params;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              loadAwsConfig();
              base64Data = new Buffer(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
              type = imageBase64.split(';')[0].split('/')[1];
              params = (0, _objectSpread2["default"])({}, paramsS3, {
                Key: "RSP/".concat(moveName, "-").concat(Date.now().toString(), ".png"),
                Body: base64Data,
                ContentType: "image/".concat(type)
              });
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                S3.upload(params,
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee2(err, data) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (err) {
                              reject(err);
                            }

                            resolve({
                              code: 100,
                              message: "Image Uploaded Correctly",
                              imageUrl: data.Location
                            });

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _uploadToS.apply(this, arguments);
  }

  return {
    uploadToS3: uploadToS3
  };
};

exports.movesFunction = movesFunction;