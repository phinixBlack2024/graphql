import { prismaClient } from "../../lib/db";


const queries ={
}
const mutations ={
    createUser: async(_:any,{name, email, password}:{name: string, email:string, password:string} )=>{
    const data =await prismaClient.user.create({ 
        data:{
            name,
            email,
            password
        }
    });
    return data.id
    }
}
export const resolvers ={queries, mutations};