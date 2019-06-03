/**
 * This is just a temporary fix in order to avoid wasting time to solve the problem with 
 * Create Method in our repository
 */

export const queries = {
    insert_ruleset: `INSERT INTO RPS.ruleset (name) VALUES (?)`,
    insert_rule: `INSERT INTO RPS.rules (id_ruleset, id_move) VALUES (?, ?)`,
    get_rules: `
     SELECT t3.id as id_killer, t3.image_route, t3.name as move_killer, t4.name as move_killed, 
            t4.id as id_killed, t6.id as id_ruleset, t6.name as ruleset_name 
     FROM (select id, image_route, name, id_killed from RPS.move t1 
          INNER JOIN RPS.killer_rule t2  on t1.id=t2.id_killer) t3 
     INNER JOIN RPS.move t4 on t3.id_killed = t4.id
     INNER JOIN RPS.rules t5 on t5.id_move = t3.id
     INNER JOIN RPS.ruleset t6 on t6.id = t5.id_ruleset
     WHERE id_ruleset = ? ORDER BY t3.id ASC`
}