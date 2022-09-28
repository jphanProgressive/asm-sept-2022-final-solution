import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { FEATURENAME, reducers } from './state';
import { CountResetComponent } from './components/count-reset.component';
import { CountByComponent } from './components/count-by/count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './state/effects/counter.effects';
@NgModule({
  declarations: [CounterComponent, CountResetComponent, CountByComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURENAME, reducers),
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [CounterComponent],
})
export class CounterModule {}
