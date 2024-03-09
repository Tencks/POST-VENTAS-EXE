import { Routes } from '@angular/router';
import { a404Component } from './Windows/PaginasError/404/a404.component';

export const routes: Routes = [

{
    path:'auth',
    loadChildren: () => import('./Auth/auth.routes').then(m => m.AUTH_ROUTES)
},    
{
    path:'clientes',
    loadChildren: () => import('./Windows/Clientes/clientes.routes').then(m => m.CLIENT_ROUTES)
},
{
    path:'dashboard',
    loadChildren: () => import('./Admin/admin.routes').then(m => m.ADMIN_ROUTES)
},
{
    path:'', redirectTo:'auth', pathMatch:'full'
},
{
    path:'**', component:a404Component
},

];
