import express from 'express'
import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraph from './graphql';


async function init(){
    const app = express();
app.use(express.json());

app.get('/',(req ,res)=> {
res.json({data:"helo world" });
})

app.use('/graphql',expressMiddleware(await createApolloGraph()));
app.listen(4000,()=>{
    console.log("port listen http://localhost:4000/");
})
}
init();