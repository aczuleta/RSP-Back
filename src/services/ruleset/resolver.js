import {rulesetModel} from './model';
import {RulesetRepository}  from './repository';
const rulesetRepository= RulesetRepository();

export default {
    Query: {
        rulesets: async (parent, {}, {models}) => {
            try{
                let result = await rulesetRepository.getRulesets();
                return result;
            }catch(err){
                throw err;
            }
        },
        rules: async (parent, {ruleset}, {models}) => {
            try{
                let result = await rulesetRepository.getRules(ruleset);
                return result;
            }catch(err){
                throw err;
            }
        }
    },
    Mutation: {
        createRuleset: async (parent, {name, moves}, {models}) => {
            try{
                let result = rulesetModel(name, moves);
                result = await rulesetRepository.createRuleset(result);
                return result;
            }catch(err){
                throw err;
            }
        }
    }
};