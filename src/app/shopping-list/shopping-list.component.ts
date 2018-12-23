import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged
    .subscribe(
    (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    );
  }
}
