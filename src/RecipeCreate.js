import React, { useState } from "react";

function RecipeCreate({ createRecipe, handleChange, formData }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
  }

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={handleChange} 
                    value={formData.name} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    id="cuisine" 
                    name="cuisine" 
                    onChange={handleChange}
                    value={formData.cuisine} 
                />
            </td>
            <td>
                <input 
                    type="url" 
                    id="photo" 
                    name="photo" 
                    onChange={handleChange} 
                    value={formData.photo}
                />
            </td>
            <td>
                <textarea 
                    id="ingredients" 
                    name="ingredients"
                    onChange={handleChange}
                    value={formData.ingredients} 
                />
            </td>
            <td>
                <textarea 
                    id="preparation" 
                    name="preparation" 
                    onChange={handleChange}
                    value={formData.preparation} 
                />
            </td>
            <td>
              <button 
                type="submit"
                onClick={handleSubmit}
                >
                    Create
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;