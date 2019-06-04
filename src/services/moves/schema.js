import { gql } from 'apollo-server-express';
export default gql`
    
    extend type Query {
        moves: [move]!
    }

    extend type Mutation {
        createMove(name: String!, imageRoute: String, kills:[ID]): ID!,
        editMove(id:ID!, name:String!, imageRoute:String!, kills: [ID]!): ID!
    }

    type move {
        id: ID!
        name: String!
        imageRoute: String!
        kills: [move]!
    }
`;