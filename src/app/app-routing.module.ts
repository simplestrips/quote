import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgbrandComponent } from './pages/pgbrand/pgbrand.component';
import { PgexpireComponent } from './pages/pgexpire/pgexpire.component';

const routes: Routes = [
  { path: '', redirectTo: '/brand', pathMatch: 'full' },
  { path: 'brand', component: PgbrandComponent },
  { path: 'expire', component: PgexpireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
