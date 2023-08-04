const { expect } = require('chai');
const { recipeSelection } = require('./recipeSelection');
const exp = require('constants');

describe('recipeSelection', ()=> {
    describe('isTypeSuitable', ()=> {
        it('test 1', () => {
//             •	isTypeSuitable(type, dietaryRestriction) This function determines if a recipe type is suitable for a given dietary restriction. It takes in two parameters: a type (string) representing the recipe type and a dietaryRestriction (string) representing the dietary restriction.
            // 'meat', 'vegetarian'
// o	If the dietaryRestriction is "Vegetarian" and the type is "Meat", it returns the message:
//  "This recipe is not suitable for vegetarians".
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
// o	If the dietaryRestriction is "Vegan" and the type is either "Meat" or "Dairy", it returns the message: 
// "This recipe is not suitable for vegans"
expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");

expect(recipeSelection.isTypeSuitable('Dairy', 'Vegetarian')).to.equal("This recipe is suitable for your dietary restriction");
expect(recipeSelection.isTypeSuitable('Dairy', 'Normal')).to.equal("This recipe is suitable for your dietary restriction");
expect(recipeSelection.isTypeSuitable('Dairy', '')).to.equal("This recipe is suitable for your dietary restriction");
expect(recipeSelection.isTypeSuitable('', '')).to.equal("This recipe is suitable for your dietary restriction");
expect(recipeSelection.isTypeSuitable('', 'Dairy')).to.equal("This recipe is suitable for your dietary restriction");
// o	For any other combination of type and dietaryRestriction, it returns the message:
//  "This recipe is suitable for your dietary restriction"
expect( () => recipeSelection.isTypeSuitable(1, 2)).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable(1, 'h')).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable()).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable(1)).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable(null, [])).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable({}, {})).to.throw("Invalid input");
expect( () => recipeSelection.isTypeSuitable(undefined)).to.throw("Invalid input");
// o	You need to validate the input, if the type and dietaryRestriction are not a strings, throw an error: "Invalid input".

        });
    });

    describe('isItAffordable', () => {
        it('test 2', ()=> {
//             •	isItAffordable (price, budget) - A function that accepts two parameters: number and number.
// o	It calculates the remaining budget by subtracting the price from the budget.
// o	If the remaining budget is less than 0, it returns the message:
//  "You don't have enough budget to afford this recipe"
        expect(recipeSelection.isItAffordable(10, 9)).to.equal("You don't have enough budget to afford this recipe");
        expect(recipeSelection.isItAffordable(10, 0)).to.equal("You don't have enough budget to afford this recipe");
// o	Otherwise, it returns the message:
//  "Recipe ingredients bought. You have {remainingBudget}$ left"
// 	Where remainingBudget is the calculated value.
        expect(recipeSelection.isItAffordable(1, 2)).to.equal("Recipe ingredients bought. You have 1$ left");
        expect(recipeSelection.isItAffordable(1, 4)).to.equal("Recipe ingredients bought. You have 3$ left");
        expect( () => recipeSelection.isItAffordable('s', 'p')).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable('s', 4)).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable(4, 's')).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable([], 6)).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable()).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable(4)).to.throw("Invalid input");
        expect( () => recipeSelection.isTypeSuitable({}, null)).to.throw("Invalid input");
// o	You need to validate the input, if the price and budget are not a number, throw an error: "Invalid input".
        });
    });

    describe('getRecipesByCategory', ()=> {
//         •	getRecipesByCategory(recipes, category) This function filters an array of recipes based on a desired category and returns an array of recipe titles. It takes in two parameters: recipes (array) representing the array of recipe objects and category (string) representing the desired category.
it('test 1', () => {
    expect(recipeSelection.getRecipesByCategory([{
            title: 'aa',
            category: 'a'
    }], 'a')).to.deep.equal(['aa']);

    expect(recipeSelection.getRecipesByCategory([{
        title: 'aa',
        category: 'a'
},
{
    title: 'aa',
    category: 'a'
}], 'a')).to.deep.equal(['aa', 'aa']);

expect(recipeSelection.getRecipesByCategory([{
    title: 'bb',
    category: 'b'
}], 'a')).to.deep.equal([]);
});

it('invalid input', () => {
    expect( () => recipeSelection.getRecipesByCategory('string', 'title')).to.throw();
    expect( () => recipeSelection.getRecipesByCategory('string', 1)).to.throw();
    expect( () => recipeSelection.getRecipesByCategory([], 7)).to.throw();
    expect( () => recipeSelection.getRecipesByCategory()).to.throw();
    expect( () => recipeSelection.getRecipesByCategory({}, {})).to.throw();
});

// o	It filters the recipes array based on the category and creates a new array filteredRecipes containing only the recipes that match the desired category.
// o	The recipes array will store the titles and the category of its recipes ([{ title: " Spicy Tofu Stir-Fry ", category: " Asian " }, ...])
// o	It maps through the filteredRecipes array to extract the titles of the recipes and returns an array of these titles.
// o	There is a need for validation for the input, an array and string may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input":
// 	If passed recipes parameter is not an array.
// 	If the category is not a string.
    });
});