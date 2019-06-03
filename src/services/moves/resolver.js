import {moveModel} from './model';
import {MatchResultRepository}  from './repository';
const matchResultRepository= MatchResultRepository();

export default {
    Query: {
        moves: async (parent, { }, { models }) => {
            try{
                let result = [];
                let moves = await matchResultRepository.getMoves();
                moves.forEach( move => {
                    let current = moveModel(move.name, move.image_route, [], move.id);
                    result.push(current);
                });
                return result;
            }catch(err){
                throw err;
            }
          
        }
    },
    Mutation: {
        createMove: async (parent, {name, imageRoute, kills}, {models}) => {
            try{
                let result = moveModel(name, imageRoute, kills);
                result = await matchResultRepository.createMove(result);
                return result;
            }catch(err){
                throw err;
            }
        }
    }
};