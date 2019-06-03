import userResolvers from './user';
import messageResolvers from './message';
import matchResultResolver from '../services/match_results/resolver';
import playerSummaryResolver from '../services/player_summary/resolver';

export default [userResolvers, messageResolvers, matchResultResolver, playerSummaryResolver];