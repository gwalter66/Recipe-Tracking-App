import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState({...initialFormState})
  const handleChange =({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
    console.log(target.value)
  }
  
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe
    ])
    setFormData({...initialFormState})
  }

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipies) => 
      currentRecipies.filter((post, index) => index !== indexToDelete)
    )
  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe} 
      />
      <RecipeCreate 
        createRecipe={createRecipe} 
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  );
}

export default App;
