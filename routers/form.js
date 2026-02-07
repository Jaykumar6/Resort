const express = require("express");
const router = express.Router();
const person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const saveData = await newPerson.save();
    console.log("Data Saved Successfully");
    res.status(200).json({ saveData });
  } catch (error) {
    console.log("Error has Occured");
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error has Occured");
    res.status(500).json({ error: "internal Error" });
  }
});
router.get("/:details", async (req, res) => {
  try {
    const details = req.params.details;
    if (details == "student" || details == "working" || details == "retired") {
      const data = await person.find({ details: details });
      console.log("Data Fetch Completed");
      res.status(200).json({ data });
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log("Error has Occured");
    res.status(500).json({ error: "internal Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datadeleted = await person.findByIdAndDelete(id);
    if (!datadeleted) {
      return res.status(500).json({ error: "id not found" });
    }
    console.log('data deleted succssfully');
    res.status(200).json({datadeleted});
  } catch (error) {
    console.log("Error has Occured");
    res.status(500).json({ error: "internal Error" });
  }
});
router.put('/:id' ,async (req,res)=> {
try{
    const id = req.params.id;
    const  editeddata = req.body;
    const editdata = await person.findByIdAndUpdate(id,editeddata,{new:true,runValidators:true});
     if (!editdata) {
      return res.status(404).json({ error: 'Data not found' });
    }
     console.log('Data updated successfully');
    res.status(200).json({ editdata});


}catch(error){
    
    console.log("Error has Occured");
    res.status(500).json({ error: "internal Error" });
}
})

  module.exports = router;

