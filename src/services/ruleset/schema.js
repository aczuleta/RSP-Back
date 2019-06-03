import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        rulesets: [ruleset]!
        rules(ruleset:ID!): rule!
    }

    extend type Mutation {
        createRuleset(name: String!, moves: [ID]!): ID!
    }

    type ruleset {
        id: ID!
        name: String!
        moves: [move]!
    }

    type rule {
        idRuleset: ID!
        rulesetName: String!
        moves: [move]!
    }
`;