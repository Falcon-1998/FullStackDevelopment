import {useState, useEffect, useRef } from 'react';
import  RecipeContent  from './recipeContent.jsx';
import  IngredientList from './IngredientList.jsx';
import HeaderMain from './HeaderMain.jsx';
import IngredientForm from './IngredientForm.jsx';
import getRecipefromAPI  from './RecipeAPI.js';
export default function Main() {   
    //const ingredients = ['chicken', 'salt', 'pepper', 'garlic', 'onion'];
    const [ingredientList, setIngredientList] = useState([]);
    const [recipe, setRecipe] = useState("");

    function handleAddIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);    
        const ingredient = formData.get('ingredient').trim();
        if (ingredient) setIngredientList(prevList => [...prevList, ingredient]);
        event.target.reset();
    }
   async function handleGetRecipe() {
        const recipeData = await getRecipefromAPI(ingredientList);
        setRecipe(recipeData);
    }
    const recipeSection = useRef(null);
    useEffect( () => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
        return () => {
            if (recipeSection.current) {
                recipeSection.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }, [recipe]);
    return (
        <main>
            <HeaderMain />
            <IngredientForm handleAddIngredient={handleAddIngredient} />
            {ingredientList.length > 0 && <IngredientList ref={recipeSection} ingredientList={ingredientList} onGetRecipe={handleGetRecipe} />}
            {recipe && <RecipeContent recipeData={recipe} onBack={() => setRecipe("")} /> }
        </main>
    );
}