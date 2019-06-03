import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        playerSummaries: [playerSummary]!
    }

    type playerSummary {
        player: String!
        wins: Int
    }
`;