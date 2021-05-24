import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`
    type User {
        name: String
    }

    type Query {
        getUsers: [User]
    }
`;
