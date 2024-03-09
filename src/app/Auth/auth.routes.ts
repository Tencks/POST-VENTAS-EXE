import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { a404Component } from '../Windows/PaginasError/404/a404.component';


export const AUTH_ROUTES: Routes = [
    {
     path:'login',
     loadComponent:()=>
        import('./login/login.component').then((c) => c.LoginComponent)
    },
    {path:'register',
    loadComponent:()=>
       import('./register/register.component').then((c) => c.RegisterComponent)
    },
    {
        path:'', redirectTo:'login', pathMatch:'full'
    },
];
