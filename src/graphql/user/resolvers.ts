import { prismaClient } from "../../lib/db";
import { GraphQLError } from 'graphql';
import UserService, { createUserPayload } from "./service";


const queries ={
}
const mutations ={
    createUser: async(_:any,payload:createUserPayload )=>{
        const { name } = payload;

        if (!name) {
          throw new GraphQLError("error hai bahi", {
            extensions: { code: 'USER_NOT_FOUND', msg: "erro hai na " },
          });// Throw an error instead of returning a JSON response
        }
    const data =await UserService.createUser(payload)
    return 2
    }
}
export const resolvers ={queries, mutations};