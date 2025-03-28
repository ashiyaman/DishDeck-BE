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
                details: recipeData.details
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

//Read all recipes
app.get('/recipes', async(req, res) => {
    try{
        const allRecipes = await Recipes.find()
        if(!allRecipes){
            res.status(404).json({error: 'Recipes not found'})
        }
        res.status(200).json(allRecipes)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

//Get a recipe by Id
app.get('/recipes/:recipeId', async(req, res) => {
    try{
        const recipe = await Recipes.findById(req.params.recipeId)
        if(!recipe){
            res.status(404).json({error: 'Recipe not found'})
        }
        res.status(200).json(recipe)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

//Add a new recipe
app.post('/recipes', async(req, res) => {
    const {name, cuisine, prepTime, cookingTime, servings, ingredients, instructions, nutrition, images, details} = req.body
    try{
        const recipe = new Recipes({
            name, cuisine, prepTime, cookingTime, servings, ingredients, instructions, nutrition, images, details
        })
        await recipe.save()
        res.status(200).json(recipe)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

//Update a recipe
app.put('/recipes/:recipeId', async(req, res) => {
    try{
        const recipeToUpdate = await Recipes.findByIdAndUpdate(req.params.recipeId, req.body)
        if(!recipeToUpdate){
            res.status(404).json({error: 'Recipe not found'})
        }
        res.status(200).json(recipeToUpdate)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

//Delete a recipe
app.delete('recipes/:recipeId', async(req, res) => {
    try{
        const recipeToDelete = await Recipes.findByIdAndDelete(req.params.recipeId)
        if(!recipeToDelete){
            res.status(404).json({error: 'Recipe not found'})
        }
        res.status(200).json(recipeToDelete)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error.'})
    }
})

app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT)
})