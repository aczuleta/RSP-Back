import {matchResultModel} from './model';
import {MatchResultRepository}  from './repository';
const resultRepository = MatchResultRepository();

export default { 
    Query: {
        results: async (parent, { winner }, { models }) => {
          let result = await resultRepository.getPlayerMatches(winner);
          return result;
        }
    },
    Mutation: {
        createResult: async (parent, { player1, player2, winner }, { me, models}) => {
            try {
                let result = matchResultModel(player1, player2, winner);
                result = await resultRepository.createResult(result);
                return result;
            } catch(err){
                throw err;
            }
        },
    }
};