  // RecipeDetails component
import {useParams} from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import useRecipeStore from './recipeStore';


const RecipeDetails = ( ) => {
    const {recipeId} = useParams();
    // const recipes = useRecipeStore( state => state.recipes );
    const recipe = useRecipeStore( ( state ) => {
        console.log( state.recipes )
        return state.recipes.find( ( recipe ) => recipe.id === Number( recipeId ) );
    }
    );

    if ( !recipe ) {
        return <div>Recipe not found!</div>
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;