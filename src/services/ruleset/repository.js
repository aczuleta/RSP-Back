import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';
import {ruleModel} from './model';
import {moveModel} from '../moves/model';

const rulesRepository = dataRepository("rules");
const rulesetRepository = dataRepository("ruleset");

export const RulesetRepository = () => {
    
    async function createRuleset(ruleset){
        try{
            let newRuleset = 
            await rulesetRepository
            .getRawConnection()
            .raw(queries.insert_ruleset, [ruleset.name]);

            newRuleset = newRuleset[0].insertId;

            ruleset.moves.forEach( async (id) => {
                await rulesRepository
                .getRawConnection()
                .raw(queries.insert_rule, [newRuleset, id]);
            });

            return newRuleset;
        } catch(err){
            throw err;
        }
    }

    async function getRulesets(){
        try{
            let results = await rulesetRepository.retrieve();
            return results;
        }catch(err){
            throw err;
        }
    }

    async function getRules(id){
        try{
            let results = 
            await rulesetRepository
            .getRawConnection()
            .raw(queries.get_rules, [id]);

            results = results[0];
            
            let result = ruleModel(results[0].id_ruleset, results[0].ruleset_name, []);
            let flag;
            
            results.forEach( move => {
                if(flag != move.id_killer) {
                    flag = move.id_killer;
                    result.moves.push(moveModel(move.move_killer, move.image_route, [moveModel(move.move_killed, "", [])], move.id_killer));
                }
                else {
                    result.moves[result.moves.length - 1].kills.push(moveModel(move.move_killed, "", []));
                }
            });

            return result;
        }catch(err){
            throw err;
        }
    }

    return {
        createRuleset,
        getRulesets,
        getRules
    }
}
