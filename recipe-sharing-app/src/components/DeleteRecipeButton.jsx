// DeleteRecipeButton.js
import React from 'react';
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // Create a navigate function

    const handleDelete = () => {
        deleteRecipe(recipeId);  // Delete the recipe
        navigate('/');           // Navigate to the homepage or another route
    };

    return (
        <button onClick={handleDelete}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
