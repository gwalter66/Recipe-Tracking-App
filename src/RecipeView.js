import React, { useState } from "react"

function RecipeView({ recipe, deleteRecipe }) {
    
    return (
        <>
            <tr>
                <td>
                    <p>{recipe.name}</p>
                </td>
                <td>{recipe.cuisine}</td>
                <td>
                    <img src={recipe.photo} />
                </td>
                <td className="content_td">
                    <p>{recipe.ingredients}</p>
                </td>
                <td className="content_td">
                    <p>{recipe.preparation}</p>
                </td>
                <td>
                    <button name="delete" onClick={deleteRecipe}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default RecipeView