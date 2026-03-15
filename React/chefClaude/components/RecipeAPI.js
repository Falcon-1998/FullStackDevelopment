export default async function getRecipefromAPI(ingredients) {
    // Return a dummy recipe object
    const dummyRecipe = `
🍳 Chef Claude's Signature Dish

Ingredients Used: ${ingredients.join(', ')}

Instructions:
1. Prepare all ingredients by washing and chopping them finely
2. Heat a pan over medium heat with a bit of oil
3. Add your ingredients in order of cooking time
4. Stir occasionally and cook until everything is tender
5. Season to taste with salt and pepper
6. Serve hot and enjoy!

Chef Claude's Tips:
- Don't overcook your ingredients - keep them fresh and crispy
- Taste as you go and adjust seasonings accordingly
- Use fresh ingredients for the best flavor
- Presentation matters - plate it beautifully!

Enjoy your meal! 🍽️
    `;
    
    return dummyRecipe;
}