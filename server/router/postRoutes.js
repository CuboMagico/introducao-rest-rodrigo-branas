const express = require("express")
const router = express.Router()
const postService = require("../service/postServices")

router.get("/posts", async (req, res) => {
    const posts = await postService.getPosts()
    res.json(posts)
})


router.post("/posts", async (req, res) => {
    const post = await postService.savePost(req.body)
    res.json(post)
})


router.put("/post/:id", async (req, res) => {
    await postService.updatePost(req.params.id, req.body)
    res.end()
})


router.delete("/post/:id", async (req, res) => {
    await postService.deletePost(req.params.id)
    res.end()
})

module.exports = router