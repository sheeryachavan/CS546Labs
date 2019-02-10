const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
    async getAllRecipes() {
        const recipeCollection = await recipes();
        var recipeList = await recipeCollection.find({}).toArray();
        var recipelisttosend = [];
        for (var i = 0; i < recipeList.length; i++) {
            recipelisttosend[i] = {
                "_id": recipeList[i]._id,
                "title": recipeList[i].title,
            }
        }
        return recipelisttosend;
    },
    async getRecipeById(id) {
        const recipeCollection = await recipes();
        const recipe = await recipeCollection.findOne({
            _id: id
        });

        if (!recipe) throw "Recipe not found";
        return recipe;
    },
    async addRecipe(title, ingredients, steps) {
        debugger;
        console.log(title + " " + ingredients + " " + steps)
        if (typeof title !== "string") throw "No title provided ";
        // if (typeof steps !== "string") throw "Please Explain steps to make this recipe";

        if (!Array.isArray(ingredients) || (Array.isArray(ingredients) && ingredients.length == 0)) throw "Please provide list of ingredients for the recipe";
        if (!Array.isArray(steps) && ((typeof steps == "string") && (steps != ""))) {
            var temp = steps;
            steps = [];
            steps[0] = temp;
        } else if (!Array.isArray(steps) || (Array.isArray(steps) && steps.length == 0)) throw "How do you make this recipe?";

        const recipeCollection = await recipes();

        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps,

        };

        const newInsertInformation = await recipeCollection.insertOne(newRecipe);
        const newId = newInsertInformation.insertedId;
        return await this.getRecipeById(newId);
    },
    async removeRecipe(id) {
        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({
            _id: id
        });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }
    },
    async updateRecipe(id, updatedRecipe) {
        const recipeCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.ingredients) {

            if (!Array.isArray(updatedRecipe.ingredients) || (Array.isArray(updatedRecipe.ingredients) && updatedRecipe.ingredients.length == 0)) throw "Please provide list of ingredients for the recipe";
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        if (updatedRecipe.title) {
            if (title == "") throw "No title provided ";
            updatedRecipeData.title = updatedRecipe.title;
        }

        if (updatedRecipe.steps) {
            if (!Array.isArray(updatedRecipe.steps) && (typeof updatedRecipe.steps == "string")) {
                var temp = updatedRecipe.steps;
                updatedRecipe.steps = [];
                updatedRecipe.steps[0] = temp;
            } else if (!Array.isArray(updatedRecipe.steps) || (Array.isArray(updatedRecipe.steps) && updatedRecipe.steps.length == 0)) throw "How do you make this recipe?";
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let updateCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipeCollection.updateOne(query, updateCommand);

        return await this.getRecipeById(id);
    }
};

module.exports = exportedMethods;