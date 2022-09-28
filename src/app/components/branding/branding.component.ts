import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from 'src/app/features/counter/state';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css'],
})
export class BrandingComponent {
  currentCount$ = this.store.select(selectCounterCurrent);
  constructor(private store: Store) {}
}
