const {initializeDatebase} = require('./db/db.connect')
const express = require('express')
const cors = require('cors')
const fs = require('fs')

const Recipes = require('./models/Recipe.models')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

const jsonData = fs.readFileSync('./recipes.json')
const recipesData = JSON.parse(jsonData)

//Initialize database
initializeDatebase()

//Seed initial Data
const seedData = async() => {
    try{
        for(const recipeData of recipesData){
            const recipe = new Recipes({
                name: recipeData.name,
                cuisine: recipeData.cuisine,
                prepTime: recipeData.prepTime,
                cookingTime: recipeData.cookingTime,
                servings: recipeData.servings,
                ingredients: recipeData.ingredients,
                instructions: recipeData.instructions,
                nutrition: recipeData.nutrition,
                images: recipeData.images,
                detail: recipeData.detail
            })
            await recipe.save()
        }
    }
    catch(error){
        console.log(error)
    }
}

//seedData()

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