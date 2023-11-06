const axios = require('axios')
const errorHandler = require('../utils/errors')

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    // console.log(req);
    const { id } = req.params

    try {
        const response = await axios(`${URL_BASE}${id}`)

        const { name, species, status, origin, location, image, gender } = response.data

        // throw new Error('error interno del server')

        const character = { id, name, species, status, origin, location, image, gender }

        return res.status(200).json(character)
    } catch (error) {
        errorHandler(res, error)
    }
    
}

module.exports = getCharById;