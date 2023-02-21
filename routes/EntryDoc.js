
const createEntry={
    tags: ["ENTRY"],
    description: "REGISTER AN Entry",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        
                        names:{
                            type:"String",
                            example:"sosten"
                           },
                           Document_number:{
                            type:"String",
                            example:"KSR 2343"
                           },
                           Document_type:{
                            type:"String",
                            example:"indangamuntu"
                           },
                           Location_issued:{
                            type:"String",
                            example:"Nyarugenge"
                           },
                           Phone_number:{
                            type:"String",
                            example:true
                           },
                           Email:{
                            type:"String",
                            example:"paccy@gmail.com"
                           },
                       
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}



const GetAllEntry={
    tags: ["ENTRY"],
    description: "GET ALL ENTRY",
    responses: {
        200: {
            description: "OK",

            content: {
                "application/json": {
                    Schema: {
                        type: "object",
                        example: {
                            count: 0,
                            user: [],
                        },
                    },
                },
            },
        },
    },
}

const EntryDoc = {
   
   "/api/entry/create/":{
    post:createEntry
    
   },
    
    "/api/entry/getall":{
        get:GetAllEntry
    },

};

  module.exports = EntryDoc
    
