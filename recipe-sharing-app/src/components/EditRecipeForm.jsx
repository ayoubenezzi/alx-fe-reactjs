// EditRecipeForm.js
import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';
import {useNavigate} from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    
    const updateRecipe = useRecipeStore( ( state ) => state.updateRecipe );
    const navigate = useNavigate()

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if ( !title.trim() || !description.trim() ) {
            alert( "Title and description cannot be empty!" );
        }
        updateRecipe( recipe.id, title, description );
        navigate(`/`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditRecipeForm;
