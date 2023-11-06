const express = require('express')
const morgan = require('morgan')
const router = require('./routes/index')
const cors = require('cors')

require('dotenv').config()
const { conn } = require('./DB_connection')
const { PORT } = process.env;

const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/rickandmorty', router)

server.listen(PORT, async ()=>{
    await conn.sync({force:true})
    console.log(`Server is listening on port: ${PORT}`)
})

/*
request -> morgan -> headers -> express.json() -> ruta (/ruta)
 req        req        req          req             info
*/