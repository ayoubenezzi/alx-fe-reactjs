import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useRecipeStore = create( persist(
    ( set ) => ( {
        recipes: [],
        favorites: [],
        addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
        removeFavorite: (recipeId) => set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId)
        })),
        recommendations: [],
        generateRecommendations: () => set(state => {
            // Mock implementation based on favorites
            const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
        addRecipe: ( newRecipe ) => set( ( state ) => ( {recipes: [...state.recipes, newRecipe]} ) ),
        setRecipes: ( recipes ) => set( {recipes} ),
        deleteRecipe: (recipeId) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)})),
        updateRecipe: ( recipeId, title, description ) => set( ( state ) => ( {
            recipes: state.recipes.map( ( recipe ) =>
                recipe.id === recipeId
                    ? {...recipe, title, description} : recipe )
        } ) ),
        searchTerm: '',
        setSearchTerm: (term) => set({searchTerm: term}),
        filteredRecipes: [],
        filterRecipes: () => set( state => ( {
            filteredRecipes: state.recipes.filter( recipe => 
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        }))
    } ), {
     name: 'recipe-storage',
    }
));



export default useRecipeStore;