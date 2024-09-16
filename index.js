const express = require("express")
const multer = require("multer")

const app = express()

const multerMiddleware = multer({ dest: 'uploads/' })

app.get("/test", (req, res) => {
  return res.json({
    message: "working"
  })
})


app.listen(4000, () => {
  console.log("Port running on port 4000")
})

