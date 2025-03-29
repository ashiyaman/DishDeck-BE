const { ServerMonitoringMode } = require('mongodb')
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    prepTime: {
        type: String,
        required: true
    },
    cookingTime: {
        type: String,
        required: true
    },
    servings: {
        type: String,
        required: true
    },
    ingredients: [
       String
    ],
    instructions: {
        type: [String],
        required: true
    },
    nutrition: {
        type: Object
    },
    image: {
        type: String,
        required: true
    },
    details: String
},
{timestamps: true}
)

const Recipes = mongoose.model('Recipe', recipeSchema)
module.exports = Recipes