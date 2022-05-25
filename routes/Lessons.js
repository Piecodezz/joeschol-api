const router = require("express").Router();
const Lesson = require("../models/Lesson");

//CREATE LESSON
router.post("/", async (req, res) => {
  const newLesson = new Lesson(req.body);
  try {
    const savedLesson = await newLesson.save();
    res.status(200).json(savedLesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  try {
    await lesson.delete();
    res.status(200).json("Lesson has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const subName = req.query.subject;
  console.log(subName);
  try {
    let lessons;
    if (subName) {
      lessons = await Lesson.find({ sub: subName });
    } else {
      lessons = await Lesson.find();
    }
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let lesson;
    lesson = await Lesson.findById(req.params.id);
    res.status(200).json(lesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
