import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoriaComponent } from './features/categories/categoria.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path:'categorias',component: CategoriaComponent},
  {path: '**',redirectTo: ''},
];
