const postData = require("../data/postsData")

exports.getPosts = () => {
    return postData.getPosts()
}

exports.getPost = async (id) => {
    const post = await postData.getPost(id)
    
    if (!post) {
        throw new Error("Post not found")
    }

    return post
}

exports.savePost = async (post) => {
    const postInDatabase = await postData.getPostByTitle(post.title)

    if (postInDatabase) {
        throw new Error("Post alredy exists")
    }

    return postData.savePost(post)
}

exports.updatePost = async (id, newPost) => {
    await exports.getPost(id)
    return postData.updatePost(id, newPost)
}

exports.deletePost = (id) => {
    return postData.deletePost(id)
}
