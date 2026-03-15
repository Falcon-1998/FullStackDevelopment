export default function IngredientForm({ handleAddIngredient }) {
    return (<form className="ingredient-form" onSubmit={handleAddIngredient}>
                    <input className="ingredient-input" type="text" placeholder="e.g. chicken, salt, pepper" name="ingredient" />
                    <button type="submit">+ Add Ingredient</button>
                </form>)
}