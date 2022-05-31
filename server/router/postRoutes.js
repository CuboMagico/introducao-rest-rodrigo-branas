const express = require("express")
const router = express.Router()
const postService = require("../service/postServices")

router.get("/posts", async (req, res, next) => {
    try {
        const posts = await postService.getPosts()
        res.json(posts)
    
    } catch (error) {
        next(error)
    }
})


router.post("/posts", async (req, res, next) => {
    try {
        const post = await postService.savePost(req.body)
        res.status(201).json(post)

    } catch (error) {
        next(error)
    }
    
})


router.put("/post/:id", async (req, res, next) => {
    try {
        await postService.updatePost(req.params.id, req.body)
        res.status(204).end() 
    
    } catch (error) {
        next(error)
    }
})


router.delete("/post/:id", async (req, res, next) => {
    try {
        await postService.deletePost(req.params.id)
        res.status(204).end()
    
    } catch (error) {
        next(error)
    }
})

module.exports = router