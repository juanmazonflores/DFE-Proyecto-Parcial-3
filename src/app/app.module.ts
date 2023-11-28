import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InventarioModule } from './pages/ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    DashboardModule,
    InventarioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
