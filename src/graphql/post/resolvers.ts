import { prismaClient } from "../../lib/db";


const queries ={
}
const mutations ={
    createPost: async(_:any,{title, description, tag}:{title: string, description:string, tag:string} )=>{
    const data =await prismaClient.post.create({ 
        data:{
            title,
            description,
            tag
        }
    });
    return data.id
    }
}
export const resolvers ={queries, mutations};