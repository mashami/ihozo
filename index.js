const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer")
const { MONGO_URI } = process.env;
const cors = require('cors');
const entryRoutes= require("./routes/Entry")
const bodyParser = require("body-parser");
const swaggerDocumention = require("./happer/documentations")



dotenv.config();

require('dotenv').config()

app.use(express.json());
app.use("/images", express.static("./images"))

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

mongoose.set('strictQuery', true);
// console,log()
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening to server

        app.listen(process.env.API_PORT, () => {
            console.log("Connected to MangoDB $ Server Its listening on port", process.env.API_PORT)



        })
    }).catch(error => console.log(error.message));
//middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/api/entry/",entryRoutes)


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

swaggerDocumention(app);