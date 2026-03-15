export default function RecipeContent({ recipeData, onBack }) { 
    return (<section className="recipe-section">
                <h2>Here's your recipe:</h2>
                <pre className="recipe-content">{recipeData}</pre>
                <button onClick={onBack}>← Back to Ingredients</button>
            </section>);
}