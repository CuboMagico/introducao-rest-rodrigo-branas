const database = require("../infra/database")

exports.getPost = (id) => {
    return database.oneOrNone("SELECT * FROM blog.posts WHERE id = $1", [id])
}

exports.getPosts = () => {
    return database.query("SELECT * FROM blog.posts")
}

exports.savePost = (post) => {
    return database.one("INSERT INTO blog.posts (title, content) VALUES ($1, $2) RETURNING *", [post.title, post.content])
}

exports.updatePost = (id, newPost) => {
    return database.none("UPDATE blog.posts SET title = $1, content = $2 WHERE id = $3", [newPost.title, newPost.content, id])
}

exports.deletePost = (id) => {
    return database.none("DELETE FROM blog.posts WHERE id = $1", [id])
}