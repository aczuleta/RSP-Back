import userResolvers from './user';
import messageResolvers from './message';
import matchResultResolver from '../services/match_results/resolver';
import playerSummaryResolver from '../services/player_summary/resolver';
import moveResolver from '../services/moves/resolver';
import rulesetResolver from '../services/ruleset/resolver';

export default [userResolvers, messageResolvers,matchResultResolver, playerSummaryResolver, moveResolver, rulesetResolver];