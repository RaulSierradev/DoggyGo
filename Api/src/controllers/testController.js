const axios = require('axios');

const test = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(response.data)
        const data = await response.data

        return res.status(200).json({ data: data })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }
}

module.exports = {
    test
}