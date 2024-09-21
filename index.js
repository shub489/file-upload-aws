const express = require("express")
const multer = require("multer")

const app = express()

// { dest: 'uploads/' } => files will be uploaded to uploads folder
const multerMiddleware = multer({ dest: 'uploads/' })

//Single file upload
// From the frontend/postman, file/image will be uploaded keeping key as "file"
app.post("/single-upload", multerMiddleware.single("file"), (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Single file upload successfully"
  })
})

// Multi file upload
// Can upload max 3 files at once
// From the frontend/postman, file/image will be uploaded keeping key as "files"
app.post("/multi-upload", multerMiddleware.array("files", 3), (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Multi file upload successfully"
  })
})


app.listen(4000, () => {
  console.log("Port running on port 4000")
})

