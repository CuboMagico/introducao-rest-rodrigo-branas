require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())
app.use("/", require("./server/router/postRoutes"))

app.use((error, req, res, next) => {
    if (error.message === "Post not found") {
        res.status(404).send(error.message)
        
    } else if (error.message === "Post alredy exists") {
        res.status(409).send(error.message)
    
    } else {
        res.status(500).send(error.message)
    }
    
})

app.listen(3000)
