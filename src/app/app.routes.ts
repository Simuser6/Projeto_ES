import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoriaComponent } from './features/categories/categoria.component';
import { ProductComponent } from './features/products/product.component';
import { AboutComponent } from './features/about/about.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: CategoriaComponent },
  { path: 'produtos/:id', component: ProductComponent },
  { path: 'categoria/:nome', component: CategoriaComponent },
  { path: 'categorias', component: CategoriaComponent },
    {
    path: 'sobre',
    component: AboutComponent
  },
    {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
  
];
