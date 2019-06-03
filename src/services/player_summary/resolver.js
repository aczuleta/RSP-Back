import {playerSummaryModel} from './model';
import {PlayerSummaryRepository}  from './repository';
const summaryRepository = PlayerSummaryRepository();

export default {
    Query: {
        playerSummaries: async (parent, { }, { models }) => {
            try{
                let result = [];
                let summaries = await summaryRepository.getPlayerSummaries();
                summaries.forEach(summary => {
                    let current = playerSummaryModel(summary.winner, summary.total);
                    result.push(current);
                });
                return result;
            }catch(err){
                throw err;
            }
          
        }
    }
};