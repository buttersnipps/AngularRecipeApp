import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'this is a simple test',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
            [
                new Ingredients('Meat', 1),
                new Ingredients('Cabbage', 2)
            ]
        ),
        new Recipe(
            'A new test recipe',
            'this is a new test',
            'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
            [
                new Ingredients('Bread', 1),
                new Ingredients('Beans', 2)
            ]
        )
      ];

    constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slService.addIngredients(ingredients);
    }
}
