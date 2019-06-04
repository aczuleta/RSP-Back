import {dataRepository} from '../../utils/dataRepository';
import {movesFunction} from './function';
import {simpleMove, moveKiller} from './model';
import {queries} from './queries';

const moveRepository = dataRepository("move");
const killsRepository = dataRepository("killer_rule");

export const MatchResultRepository = () => {

    async function createMove(move){
        try{
            let url = move.imageRoute ? await movesFunction().uploadToS3(move.imageRoute, move.name) : "";
            url = url ? url.imageUrl : "";
            let sMove = simpleMove(move.name, url);
            
            let newMove = await moveRepository.getRawConnection().raw(queries.insert_move, [...Object.values(sMove)]);
            
            newMove = newMove[0].insertId;
            
            if(move.kills){
                move.kills.forEach( async (id) => {
                    let killerMove = moveKiller(+newMove, +id);
                    await killsRepository
                    .getRawConnection()
                    .raw(queries.insert_killer_move, [...Object.values(killerMove)]);
                });
            }

            return newMove;
        } catch(err){
            throw err;
        }
    }

    async function editMove(id, move){
        try{
            let url;

            if(move.imageRoute.includes("data:image/png;base64")) {
                url = await movesFunction().uploadToS3(move.imageRoute, move.name);
                url = url.imageUrl;
            } else {
                url = move.imageRoute;
            }

            let sMove = simpleMove(move.name, url);
            
            let newMove = 
            await moveRepository
            .getRawConnection()
            .raw(queries.update_move, [...Object.values(sMove), +id]);
            
            if(move.kills){
                move.kills.forEach( async (idKilled) => {
                    await killsRepository
                    .getRawConnection()
                    .raw(queries.update_killer_move, [+idKilled, +id]);
                });
            }
    
            return id;
        } catch(err){
            throw err;
        }
    }
    
    async function getMoves(){
        try{
            let results = await moveRepository.retrieve();
            return results;
        }catch(err){
            throw err;
        }
    }

    return {
        getMoves,
        createMove,
        editMove
    }
}