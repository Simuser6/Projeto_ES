import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoriaComponent } from './features/categories/categoria.components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path:'',
    component: CategoriaComponent
  }
];
