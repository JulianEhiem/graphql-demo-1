import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// create schema
const typeDefs = `#graphql 
   type familyMember {
        name: String
        age: Int
        relationship: String
        favoriteFood: String
        favoriteDrink: String
    }
    
    type Query {
        familyMembers: [familyMember]
    }
    
    type Mutation {
        addFamilyMember(
    }
`;

// create data source
const family = [
    {
        "name": "Julian",
        "age": 28,
        "relationship": "self",
        "favoriteFood": "Plantains",
        "favoriteDrink": "Chocolate Malt Shake"
    },
    {
        "name": "Kristen",
        "age": 30,
        "relationship": "wife",
        "favoriteFood": "Steak",
        "favoriteDrink": "Ginger Ale"
    },
    {
        "name": "Teresa",
        "age": 0,
        "relationship": "daughter",
        "favoriteFood": "formula",
        "favoriteDrink": "formula"
    },
    {
        "name": "Ambrose",
        "age": 0,
        "relationship": "son",
        "favoriteFood": "formula",
        "favoriteDrink": "formula"
    }
    ]

// create resolver
const resolvers = {
    Query: {
        familyMembers: () => family,
    },
};


// create apollo server instance
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server,{
    listen: { port:4000 },
})

console.log(`Server ready at: ${url}`);