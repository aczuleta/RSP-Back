import {playerSummaryModel} from './model';
import {playerSummaryRepository}  from './repository';
const summaryRepository = playerSummaryRepository();

export default {
    Query: {
        playerSummaries: async (parent, { }, { models }) => {
            try{
                let result = [];
                let summaries = await summaryRepository.getPlayerSummaries();
                for(let summary of summaries){
                    let current = playerSummaryModel(summary.winner, summary.total);
                    result.push(current);
                }
                return result;
            }catch(err){
                throw err;
            }
          
        }
    }
};