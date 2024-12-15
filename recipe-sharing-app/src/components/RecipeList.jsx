// RecipeList component
import {Link} from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore( state => state.recipes );
    const filteredRecipes = useRecipeStore( state => state.filteredRecipes );

    const mappedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

    return (
        <div>
            { mappedRecipes.map( recipe => (
                <div key={recipe.id}>
                    <h1>{recipe.id}</h1>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ) )}

            <Link to="/">Go Home</Link>
        </div>
    );
};


export default RecipeList;