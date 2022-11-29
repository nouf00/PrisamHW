
import {z} from 'zod'



export const users=z.object({
 body:z.object({
    username:z.string({required_error:" Name Book is  requerd" , 
    invalid_type_error: "Name Bookis the most be a String"}).min(4).max(9),
    passwoerd: z.string({required_error:"  genre Book is  requerd" , 
    invalid_type_error: " genre Book is the most be a String"}).min(9)
}),
params:z.object({
    id :z.string({required_error:" ID of of user is  requerd" , 
    invalid_type_error: "ID Of user is the most be a String"}),

}),
query:z.object({
    id :z.string({required_error:" ID of user is  requerd" , 
    invalid_type_error: "ID Of user is the most be a String"}),
})
})
  export type userprasmType =z.infer<typeof users>['params']
  export type userBodyType =z.infer<typeof users>['body']
  export type userQuerytmType =z.infer<typeof users>['query']
