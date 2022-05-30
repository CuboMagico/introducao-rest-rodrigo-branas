const axios = require("axios")
const postService = require("../service/postServices")
const crypto = require("crypto")


const request = (url, method, data) => {
    return axios({
        url, 
        method, 
        data
    })
}


const generate = () => {
    return crypto.randomBytes(20).toString("hex")
}


test("Should get posts", async () => {
    const post1 = await postService.savePost({ title: generate(), content: generate() })
    const post2 = await postService.savePost({ title: generate(), content: generate() })
    const post3 = await postService.savePost({ title: generate(), content: generate() })

    const response = await request('http://localhost:3000/posts', 'GET')

    expect(response.data).toHaveLength(3)

    await postService.deletePost(post1.id)
    await postService.deletePost(post2.id)
    await postService.deletePost(post3.id)

    const data = response.data
})

test("Should save a post", async () => {
    const post = { title: generate(), content: generate() }

    const response = await request('http://localhost:3000/posts', 'POST', post)
    const data = response.data

    expect(post.title).toBe(data.title)
    expect(post.content).toBe(data.content)

    await postService.deletePost(data.id)
})

test("Should update a post", async () => {
    const post = await postService.savePost({ title: generate(), content: generate() })

    post.title = generate()
    post.content = generate()


    await request(`http://localhost:3000/post/${post.id}`, 'PUT', post)
    const updatedPost = await postService.getPost(post.id)


    expect(post.title).toBe(updatedPost.title)
    expect(post.content).toBe(updatedPost.content)

    await postService.deletePost(post.id)
})

test("Should delete a post", async () => {
    const post = await postService.savePost({ title: generate(), content: generate() })

    await request(`http://localhost:3000/post/${post.id}`, 'DELETE', post)
    const posts = await postService.getPosts()
    expect(posts).toHaveLength(0)
})

