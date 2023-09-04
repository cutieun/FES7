var express = require('express');
var router = express.Router();
const upload = require("../module/imageUpload");

router.post("/upload", upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success",
  })
})

module.exports = router;

