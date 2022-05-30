const postData = require("../data/postsData")

exports.getPosts = () => {
    return postData.getPosts()
}

exports.getPost = (id) => {
    return postData.getPost(id)
}

exports.savePost = (post) => {
    return postData.savePost(post)
}

exports.updatePost = (id, newPost) => {
    return postData.updatePost(id, newPost)
}

exports.deletePost = (id) => {
    return postData.deletePost(id)
}
