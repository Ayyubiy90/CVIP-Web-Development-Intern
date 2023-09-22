const { default: Axios } = require("axios")

const instance = Axios.create({
    baseURL:"https://api-v3.igdb.com"
})

export default instance