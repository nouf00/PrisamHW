import {z} from 'zod'



export const Book=z.object({
 body:z.object({
    Book:z.string({required_error:" Name Book is  requerd" , 
    invalid_type_error: "Name Bookis the most be a String"}),
    genre: z.string({required_error:"  genre Book is  requerd" , 
    invalid_type_error: " genre Book is the most be a String"})
}),
params:z.object({
    id :z.string({required_error:" ID of Book is  requerd" , 
    invalid_type_error: "ID Of Book is the most be a String"}),

}),
query:z.object({
    id :z.string({required_error:" ID of Book is  requerd" , 
    invalid_type_error: "ID Of Book is the most be a String"}),
})
})

export type bookprasmType =z.infer<typeof Book >['params']
export type bookBodyType =z.infer<typeof Book>['body']
export type bookQuerytmType =z.infer<typeof Book>['query']



