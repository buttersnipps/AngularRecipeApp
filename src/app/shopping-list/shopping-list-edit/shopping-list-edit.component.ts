import { Component, OnInit, ElementRef, ViewChild,  } from '@angular/core';
import { Ingredients } from 'src/app/Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddedItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
