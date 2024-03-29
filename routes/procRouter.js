import express from "express";
import Contact from "../schemas/index.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const result = await newContact
      .save()
      .then(() => console.log("new contact is created!"))
      .catch((err) => console.log(err));
    res.redirect('/');
    // res.status(200).json({
    //   success: true,
    //   message: "new contact creation is done!",
    // });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "new contact creation is failed",
    });
  }
});

export default router;
