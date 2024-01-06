import { prismaClient } from "../../../lib/db"

export  interface createUserPayload{
name: string,
email: string,
password: string
}

class UserService{
    public static async createUser(payload: createUserPayload){
        const {name ,email ,password} = payload
       
        // const validator =  UserService.validationFunction(payload)
        // console.log(validator)
         const user = prismaClient.user.create({
            data:{name, email ,password}
         })
         console.log(typeof user);
        return 2
    }

    private static validationFunction(payload1: createUserPayload){

        console.log(payload1['email'])
        // for (let key in payload1) {
        //     if (!payload1[key as keyof createUserPayload]) {
        //         return "nikhil";
        //     }
           
        // }
        return "no way";
    }
}

export default UserService