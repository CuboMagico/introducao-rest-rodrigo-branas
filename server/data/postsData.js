const database = require("../infra/database")

exports.getPosts = () => {
    return database.query("SELECT * FROM blog.posts")
}