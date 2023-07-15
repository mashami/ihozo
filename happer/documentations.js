const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const EntryDoc = require("../routes/EntryDoc");
// const userDoc = require("../routes/UserDoc");
// const PostDoc = require("../routes/PostsDoc");
// const categoryDoc=require("../routes/categoryDoc")
// const commentDoc = require("../routes/commentDoc");
// const realStateDoc= require("../routes/realStateDoc")

const options= {
    definition: {
        openapi: '3.0.0',
        info: {
          version: '1.0.0',
          title: 'RANGA APIs',
          description: 'Ranga apis in use.',
        },
        servers: [
          {
            url: 'http://localhost:5555/',
            description: 'Development server',
          },
          {
            url: 'https://mashami.onrender.com',
            description: "Hosted Development server",
          },
          // {
          //   url: 'https://blog-apis-jqjw.onrender.com',
          //   description: "Hosted Development server",
          // },
          
        ],
        tags: [
         
          { name: 'ENTRY', description: 'Entry Routes' },
          { name: 'FOUNDER', description: 'Founder routes' },
         
         
         
        ],
       
        components: {
          securitySchemes: {
            token:{
              type:'apiKey',
              scheme:'bearer',
              bearerFormat:'JWT',
              name:'token',
              in:'header'

            },

          },

        },
        paths: {
          ...EntryDoc
        },
      },
      apis: ['../routes/**/*.js'],

};

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocumention = (app) =>{
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}

module.exports =swaggerDocumention;
