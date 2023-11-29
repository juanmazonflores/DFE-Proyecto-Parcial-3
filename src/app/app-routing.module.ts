import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { ExploradorComponent } from './pages/ventas/explorador/explorador.component';

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent },
  { path: 'ventas', component: ExploradorComponent },
  { path: '', redirectTo: '/ventas', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
