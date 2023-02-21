const router = require("express").Router();
const entry = require("../models/Entry")


// POST Entry
router.post("/create/",async(req, res) =>{
    const newcat = new entry(req.body);
    try {
        const saveCat = await newcat.save();
        return res.status(200).json(saveCat);

    }catch (err){
        return res.status(500).json(err)
    }
});


// GET ALL Entry
router.get("/getall/",async(req, res) =>{
   
    try {
        const category = await entry.find();
        return  res.status(200).json(category);

    }catch (err){
        return  res.status(500).json(err)
    }
});

module.exports = router;
