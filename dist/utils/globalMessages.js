'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = void 0;
var messages = {
  db: {
    connectionReadyError: {
      code: 140,
      message: 'There is already an existing connection',
      status: function status() {
        return 200;
      }
    },
    dbError: {
      code: 105,
      message: 'Error in the Database',
      status: function status() {
        return 500;
      }
    }
  }
};
exports.messages = messages;