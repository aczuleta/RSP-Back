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
  insert_move: "INSERT INTO RPS.move (name, image_route) VALUES (?, ?)",
  insert_killer_move: "INSERT INTO RPS.killer_rule (id_killer, id_killed) VALUES (?, ?)",
  update_move: "UPDATE RPS.move t1\n                    SET name = ?, image_route = ?\n                    WHERE t1.id = ?",
  update_killer_move: "UPDATE RPS.killer_rule  t1\n                         SET id_killed = ? \n                         WHERE t1.id_killer = ?"
};
exports.queries = queries;