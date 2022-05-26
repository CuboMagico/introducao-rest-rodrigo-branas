const express = require("express")
const router = express.Router()
const postService = require("../service/postServices")

router.get("/posts", async (req, res) => {
    const posts = await postService.getPosts()
    res.json(posts)
})

router.get("/posts/:id", async () => {

})


router.post("/posts", async () => {

})


router.put("/posts/:id", async () => {

})


router.delete("/posts/:id", async () => {

})

module.exports = router