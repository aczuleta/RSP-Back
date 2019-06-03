import {dataRepository} from '../../utils/dataRepository';

export const matchResultRepository = () => {

    const matchResultRepository = dataRepository("match");

    async function createMatchResult(result){
        try{
            let newResult = await matchResultRepository.create(result);
            return newResult;
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