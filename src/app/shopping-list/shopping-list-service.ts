import { Ingredients } from '../Shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
   private ingredients: Ingredients[] = [
        new Ingredients('Apple', 5),
        new Ingredients('Tomatoes', 3)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getOneIngredient(index: number) {
        return this.ingredients[index];
    }
    updateIngredient(index: number, newIngredient: Ingredients) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
