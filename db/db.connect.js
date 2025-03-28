const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

const initializeDatebase = async() => {
    try{
        await mongoose
                .connect(MONGODB_URI)
                .then(() => console.log('Successfully connected to Database.'))
    }
    catch(error){
        console.log('Error while connecting to Database.')
    }
}

module.exports = {initializeDatebase}