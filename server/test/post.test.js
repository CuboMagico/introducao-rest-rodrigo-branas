const axios = require("axios")


test("Should get posts", async () => {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'GET'
    })
    const data = response.data

    expect(data).toHaveLength(3)

    console.log(data)
})