"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;

/**
 * This is just a temporary fix in order to avoid wasting time to solve the problem with 
 * Create Method in our repository
 */
var queries = {
  insert_match_result: "INSERT INTO RPS.match (player1, player2, winner) VALUES (?, ?, ?)"
};
exports.queries = queries;