import express from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function init(){
    const app = express();
app.use(express.json());
/// create graohql server 
const AppoloServer = new ApolloServer({
typeDefs:`
    type Query {
        helo: String
        say(name: String): String
    }
`,  // schema 
resolvers:{
    Query:{
        helo:()=>`helo wolrd `,
        say: (_, {name}: {name: String} ) => `helo ${name}`
    },
},  
});

// start gql server 
await AppoloServer.start();
app.get('/',(req ,res)=> {
res.json({data:"helo world" });
})
app.use('/graphql',expressMiddleware(AppoloServer));
app.listen(4000,()=>{
    console.log("port listen 4000");
})
}
init();