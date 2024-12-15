import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App (){
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <SearchBar />
                        <AddRecipeForm />
                        <RecipeList />
                        <FavoritesList />
                        <RecommendationsList />
                    </>
                } />
                <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
            </Routes>
        </Router>
  )
}

export default App;