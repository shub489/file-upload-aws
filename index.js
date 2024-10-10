const express = require("express")
const multer = require("multer")
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())

const app = express()

// { dest: 'uploads/' } => files will be uploaded to uploads folder
const multerMiddleware = multer({ dest: 'uploads/' })

//Single file upload
// From the frontend/postman, file/image will be uploaded keeping key as "file"
app.post("/single-upload", multerMiddleware.single("nishant"), (req, res) => {
  console.log(req.file)
  return res.status(200).json({
    success: true,
    message: "Single file upload successfully"
  })
})

// Multi file upload
// Can upload max 3 files at once
// From the frontend/postman, file/image will be uploaded keeping key as "files"
app.post("/multi-upload", multerMiddleware.array("rounak", 10), (req, res) => {
  console.log(req.files)
  return res.status(200).json({
    success: true,
    message: "Multi file upload successfully"
  })
})


// multiple field Upload
// frontend will send files using key as exterior and interior
app.post("/multi-fields-upload", multerMiddleware.fields(
  [
    { name: "exterior", maxCount: 10 },
    { name: "interior", maxCount: 10 }
  ]
), (req, res) => {
  console.log(req.files)
  return res.status(200).json({
    success: true,
    message: "Multi-field upload sucessfully"
  })
})


app.post("/multi-upload", multerMiddleware.array("rounak", 10), (req, res) => {
  console.log(req.files)
  return res.status(200).json({
    success: true,
    message: "Multi file upload successfully"
  })
})


app.listen(4000, () => {
  console.log("Port running on port 4000")
})

