import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './features/counter/counter.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ShoppingComponent } from './features/shopping/shopping.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./features/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
