const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        age: Int
        nationality: Nationality!
        friends: [User],
        favMovies: [Movie]
    }

    type Movie {
        id: Int!,
        name: String!,
        year: Int!,
        screeningNow: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: Int!): User!
        movies: [Movie!]!
        movie(id: Int!): Movie!
    }

    enum Nationality {
        INDIA
        CHINA
        USA
        RUSSIA
        UK
        JAPAN
    }
`;

module.exports = { typeDefs }
