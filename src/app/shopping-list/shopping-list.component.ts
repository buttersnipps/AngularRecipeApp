import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingListService } from './shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients: Ingredients[];
  private subscription: Subscription;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription= this.shoppingService.ingredientChanged
    .subscribe(
    (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
