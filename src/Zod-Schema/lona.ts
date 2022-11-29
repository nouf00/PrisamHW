import {z} from 'zod'



export const Loan=z.object({
 body:z.object({
    Book_id:z.string({required_error:" ID of Book is  requerd" , 
    invalid_type_error: "ID Book is the most be a String"}),
    user_id: z.string({required_error:"  ID user is  requerd" , 
    invalid_type_error: " ID USERis the most be a String"})
}),
params:z.object({
    id :z.string({required_error:" ID of Loan is  requerd" , 
    invalid_type_error: "ID Of Loan is the most be a String"}),

}),

query:z.object({
    id :z.string({required_error:" ID of Loan is  requerd" , 
    invalid_type_error: "ID Of Loan is the most be a String"}),
})
})

const loanReq=z.object({
    params:z.object({
        Book_id:z.string({required_error:" ID of Book is  requerd" , 
    invalid_type_error: "ID Book is the most be a String"}),
    user_id: z.string({required_error:"  ID user is  requerd" , 
    invalid_type_error: " ID USERis the most be a String"})

    })
})
export type LoanReqestprasmType =z.infer<typeof loanReq >['params']
export type LoanprasmType =z.infer<typeof Loan >['params']
export type LoanBodyType =z.infer<typeof Loan>['body']
export type LoanQuerytmType =z.infer<typeof Loan>['query']