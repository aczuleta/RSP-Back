import {dataRepository} from '../../utils/dataRepository';

export const playerSummaryRepository = () => {

    const playerSummaryRepository = dataRepository("match");

    async function getPlayerSummaries(){
        try{
            let connection  = playerSummaryRepository.getConnection();
            let summaries = 
            await connection
            .count({total: "id"})
            .select("winner")
            .groupBy("winner");
            return summaries;
        } catch(err){
            throw err;
        }
    }

    return {
        getPlayerSummaries: getPlayerSummaries
    }
}