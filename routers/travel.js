const express = require("express");
const router = express. Router();
const person = require("./../models/explore");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newperson = new person(data);
    const saveperson = await newperson.save();
    console.log('data saved successfully');
    res.status(200).json({saveperson});
  } catch (error) {
    console.log("error has occured");
    res.status(500).json({ error: error.message });
  }
});

router.get("/",async (req,res)=>{
    try{
     const alldata = await person.find();
     res.status(200).json({alldata});
    }catch(error){
        
    console.log("error has occured");
    res.status(500).json({ error: error.message });
    }
});

router.get('/:data', async (req,res) => {
    try{
         const data = req.params.data;
         if(data == 'bike' || data == 'car' || data == 'bus'){
            const match = await person.find({machineName:data});
            console.log('data fetched successfully');
            res.status(200).json({match});
         }else{
            res.status(404).json({error:"invalid data"});
         }
    }catch(error){
    console.log("error has occured");
    res.status(500).json({ error: error.message });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const data = req.params.id;
        const match = req.body;
        const edit = await person.findByIdAndUpdate(data,match,{new:true,runValidators:true});
        if(!edit){
            return res.status(404).json({error:'id is invalid'});
        }
        console.log('edited successfully');
        res.status(200).json({edit});
    }catch(error){
    console.log("error has occured");
    res.status(500).json({ error: error.message });
    }
});

router.delete('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        const deleteid = await person.findByIdAndDelete(id);
        if(!deleteid){
            return res.status(404).json({error:'id is invalid'});
        }
        console.log('data deleted successfully');
        res.status(200).json({deleteid});
    }catch(errror){
    console.log("error has occured");
    res.status(500).json({ error: error.message });
    }
});

module.exports = router;