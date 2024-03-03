import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.API_PORT

app.get('/', (_req,res) =>{
    res.status(200).send('Products API: Hello World!')
})

app.listen(PORT,() => console.log(`Running on port ${PORT}`))