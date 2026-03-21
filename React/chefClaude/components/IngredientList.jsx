export default function IngredientList({ ref, ingredientList , onGetRecipe}) {
   const ingredientElements = ingredientList.map( (ingredient,index) => <li key={index} className="ingredient-item">{ingredient}</li>);
   return (
        <section className="ingredients-section">
                <h2 className='ingredient-list-label'>Ingredients List : </h2>
                <ul className="ingredient-list">{ingredientElements}</ul>
                {ingredientList.length > 3 && <div className='ingredient-actions'>
                    <div ref={ref} className="recipe-prompt">
                        <h3>Ready for a recipe?</h3>
                        <p> Generate a recipe based on your ingredients!</p>
                    </div> 
                    <button className="clear-button" onClick={onGetRecipe}>Get a recipe!</button>
                </div>
                }
        </section>
    );
}   