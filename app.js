const express = require("express")
const multer = require("multer")
const { v4: uuidv4 } = require('uuid');
const app = express()

// Upload destination + Rename filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads")
  },
  filename: (req, file, cb) => {
    console.log("file => ", file)
    cb(null, `${uuidv4()}-${file.originalname}`)
  }
})

// file filter
const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true)
  }
  else {
    cb(new Error("File type is not correct"), false)
  }
}

const fileUpload = multer({ storage, fileFilter })


app.post('/multi-upload', fileUpload.array("docs", 5), (req, res) => {
  try {
    console.log("route working")
    return res.status(200).json({
      success: true,
      message: "Files upload successfullyy"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }
})

app.listen(4000, () => {
  console.log("App is listening on port 4000")
})

