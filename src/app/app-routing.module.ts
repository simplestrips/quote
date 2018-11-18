import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgbrandComponent } from './pgbrand/pgbrand.component';


const routes: Routes = [
  { path: '', redirectTo: '/brand', pathMatch: 'full' },
  { path: 'brand', component: PgbrandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
