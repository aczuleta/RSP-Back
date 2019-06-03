import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        results(winner:String!): [MatchResult]!
    }

    type MatchResult {
        id: ID!
        player1: String!
        player2: String!
        winner: String!
    }

    extend type Mutation {
        createResult(player1: String!, player2: String!, winner:String!): ID!
    }
`;