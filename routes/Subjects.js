const router = require("express").Router();
const Subject = require("../models/Subject")

//CREATE LESSON
router.post("/", async (req, res) => {
  const newSubject = new Subject(req.body);
  try {
    const savedSubject = await newSubject.save();
    res.status(200).json(savedSubject);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
      const updatedSubject = await Subject.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        ); 
        res.status(200).json(updatedSubject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
        const subject = await Subject.findById(req.params.id);
      try {
        await subject.delete();
        res.status(200).json("Subject has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
})

router.get("/", async (req, res) => {
  try {
    let subject ;
    subject = await Subject.find();
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get("/:id", async (req, res) => {
  try {
    let subject ;
    subject = await Subject.findById(req.params.id);
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router
