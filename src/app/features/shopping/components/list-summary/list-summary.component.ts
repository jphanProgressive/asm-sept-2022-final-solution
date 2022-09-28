import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShoppingSummaryModel } from '../../models';
import { ShoppingDataService } from '../../services/shopping-data.service';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.css'],
})
export class ListSummaryComponent {
  model: Observable<ShoppingSummaryModel>;
  constructor(private service: ShoppingDataService) {
    this.model = service.getData().pipe(
      map((data) => {
        return {
          total: data.length,
          purchased: data.filter((d) => d.purchased).length,
          unpurchased: data.filter((d) => !d.purchased).length,
        } as ShoppingSummaryModel;
      })
    );
  }
}
