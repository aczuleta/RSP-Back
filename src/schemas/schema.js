import { gql } from 'apollo-server-express';
import fs from 'fs';

import userSchema from './user';
import messageSchema from './message';

import matchResultSchema from '../services/match_results/schema';
import playerSummarySchema from '../services/player_summary/schema';
import moveSchema from '../services/moves/schema';
import rulesetSchema from '../services/ruleset/schema';


const dirServices = '../services';
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

let exports = [linkSchema];
export default [linkSchema, userSchema, messageSchema, matchResultSchema, playerSummarySchema, moveSchema, rulesetSchema];