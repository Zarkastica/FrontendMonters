import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'tienda', component:TiendaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
