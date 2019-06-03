/**
 * This is just a temporary fix in order to avoid wasting time to solve the problem with 
 * Create Method in our repository
 */

 export const queries = {
     insert_move: `INSERT INTO RPS.move (name, image_route) VALUES (?, ?)`,
     insert_killer_move: `INSERT INTO RPS.killer_rule (id_killer, id_killed) VALUES (?, ?)`
 }