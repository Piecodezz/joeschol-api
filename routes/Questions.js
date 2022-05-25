const router = require("express").Router();
const Question = require("../models/Question");

//CREATE LESSON
router.post("/", async (req, res) => {
  const newQuestion = new Question(req.body);
  try {
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  const question = await Question.findById(req.params.id);
  try {
    await question.delete();
    res.status(200).json("Subject has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const lesub = req.query.lesub;
  try {
    let question;
    if (lesub) {
      question = await Question.find({ lesub });
    } else {
      question = await Question.find();
      res.status(200).json(question);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
