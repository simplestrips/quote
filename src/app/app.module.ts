import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PgbrandComponent } from './pages/pgbrand/pgbrand.component';
import { PgexpireComponent } from './pages/pgexpire/pgexpire.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PgbrandComponent,
    PgexpireComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
