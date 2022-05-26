require("dotenv").config()

const express = require("express")
const app = express()


app.use("/", require("./server/router/postRoutes"))


app.listen(3000)
