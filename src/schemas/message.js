import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        messages: [Message!]!
        message(id: ID!): Message!
    }
    type Message {
        id: ID!
        text: String!
        user: User!
    }
    extend type Mutation {
        createMessage(text: String!, userId:ID!): Message!
        deleteMessage(id: ID!): Boolean!
    }
`;