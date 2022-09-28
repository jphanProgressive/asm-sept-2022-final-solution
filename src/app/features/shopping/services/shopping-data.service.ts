import { ShoppingListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
export class ShoppingDataService {
  private subject: BehaviorSubject<ShoppingListItem[]>;

  constructor() {
    // maybe our api call
    this.subject = new BehaviorSubject<ShoppingListItem[]>(this.data);
  }
  private data: ShoppingListItem[] = [
    { description: 'Hairspray', purchased: false },
    { description: 'Beer', purchased: true },
  ];

  getData(): Observable<ShoppingListItem[]> {
    return this.subject.asObservable();
  }

  addItem(item: ShoppingListItem) {
    this.data = [item, ...this.data];
    this.subject.next(this.data);
  }
}
