const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({
  type: 'application/json'
});
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await recipeData.getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({
      error: "Recipe not found"
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

router.post("/", jsonParser, async (req, res) => {
  console.log(req);
  const blogrecipeData = req.body;
  //   const blogrecipeData = {
  //     "title": "Fried Eggs",
  //     "ingredients": [{
  //             "name": "Egg",
  //             "amount": "2 eggs"
  //         },
  //         {
  //             "name": "Olive Oil",
  //             "amount": "2 tbsp"
  //         }
  //     ],
  //     "steps": [
  //         "First, heat a non-stick pan on medium-high until hot",
  //         "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
  //         "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
  //         "Gently pour the egg from the bowl onto the oil",
  //         "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
  //         "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
  //         "Remove from oil and plate",
  //         "Repeat for second egg"
  //     ]
  // };
  try {
    //   console.log(blogrecipeData);
    const {
      title,
      ingredients,
      steps
    } = blogrecipeData;
    const newRecipe = await recipeData.addRecipe(title, ingredients, steps);

    res.json(newRecipe);
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    if (updatedData.title && updatedData.ingredients && updatedData.steps) {
      try {
        await recipeData.getRecipeById(req.params.id);
      } catch (e) {
        res.status(404).json({
          error: "Recipe not found"
        });
      }

      try {
        const updatedRecipe = await recipeData.updateRecipe(req.params.id, updatedData);
        res.json(updatedRecipe);
      } catch (e) {
        res.status(500).json({
          error: e
        });
      }
    } else
      throw "Please enter all the data"
  } catch (e) {
    res.status(405).json({
      error: e
    });
  }
});
router.patch("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    await recipeData.getRecipeById(req.params.id);
  } catch (e) {
    res.status(404).json({
      error: "Recipe not found"
    });
  }

  try {
    const updatedRecipe = await recipeData.updateRecipe(req.params.id, updatedData);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

router.delete("/:id",async (req, res) => {
  try {
    await recipeData.getRecipeById(req.params.id);
  } catch (e) {
    res.status(404).json({
      error: "Recipe not found"
    });
  }
  try {
    await recipeData.removeRecipe(req.params.id);
    res.json("recipe of id " +req.params.id +" deleted successfully")
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

module.exports = router;