import { Ingredients } from '../Shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredients[]>();
   private ingredients: Ingredients[] = [
        new Ingredients('Apple', 5),
        new Ingredients('Tomatoes', 3)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
