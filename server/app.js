import express from "express"

const app = express()

const PORT = 3000
const HOST = "0.0.0.0"

app.get("/", (req, res) => {
    res.send("Hello world! Esse servidor está sendo disponibilizado com Docker e nodemon!")
})


app.listen(PORT, HOST)