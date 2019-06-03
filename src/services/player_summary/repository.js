import {dataRepository} from '../../utils/dataRepository';
const playerSummaryRepository = dataRepository("match");

export const PlayerSummaryRepository = () => {

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
        getPlayerSummaries
    }
}