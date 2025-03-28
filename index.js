const {initializeDatebase} = require('./db/db.connect')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

initializeDatebase()

app.get('/', async(req, res) => {
    try{
        res.send('Welcome to DishDeck - a powerful and user-friendly recipe organizer designed for food enthusiasts who want to store, manage, and explore their favorite recipes.')
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT)
})