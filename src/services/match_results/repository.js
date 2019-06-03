import {dataRepository} from '../../utils/dataRepository';
import {queries} from './queries';

const matchResultRepository = dataRepository("match");

export const MatchResultRepository = () => {

    async function createMatchResult(result){
        try{
            let newResult = matchResultRepository.getRawConnection();
            newResult = await newResult.raw(queries.insert_match_result, [...Object.values(result)]);
            return newResult[0].insertId;
        } catch(err){
            throw err;
        }
    }
    
    async function getPlayerMatches(playerName){
        try{
            let results = await matchResultRepository.retrieve({
                winner: playerName
            });
            return results;
        }catch(err){
            throw err;
        }
    }

    return {
        createResult: createMatchResult,
        getPlayerMatches
    }
}