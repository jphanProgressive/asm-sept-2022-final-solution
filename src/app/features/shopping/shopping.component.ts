import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';
import { ShoppingDataService } from './services/shopping-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent {
  shoppingList = this.service.getData();
  constructor(private service: ShoppingDataService) {}

  addItemToList(item: { description: string }) {
    const itemToAdd = {
      ...item,
      purchased: false,
    };
    this.service.addItem(itemToAdd);
  }
  // done
}
