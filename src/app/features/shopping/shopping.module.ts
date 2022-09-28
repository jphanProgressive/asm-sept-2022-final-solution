import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingDataService } from './services/shopping-data.service';
import { ListSummaryComponent } from './components/list-summary/list-summary.component';

@NgModule({
  declarations: [ShoppingComponent, ListComponent, EntryComponent, ListSummaryComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ShoppingComponent],
  providers: [ShoppingDataService],
})
export class ShoppingModule {}
