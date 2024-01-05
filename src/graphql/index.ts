import { ApolloServer } from '@apollo/server';
import { User } from './user';
import { Post } from './post';
async function createApolloGraph(){
/// create graohql server 
const gqlServer = new ApolloServer({
    typeDefs:`
        type Query {
         heloo: String
        }
        type Mutation {
         ${User.mutations},
         ${Post.mutations}
        }
    `,  // schema 
    resolvers:{
        Query:{
            ...User.resolvers.queries,
            ...Post.resolvers.queries
        },
        Mutation:{
            ...User.resolvers.mutations,
...Post.resolvers.mutations
        }
    },  
    });
    
    // start gql server 
    await gqlServer.start();
    return gqlServer
}
export default createApolloGraph;