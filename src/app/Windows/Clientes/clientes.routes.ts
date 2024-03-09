import { Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';


export const CLIENT_ROUTES: Routes = [
    {path:'list', component:ClientesListComponent},
    {path:'cliente', component:ClienteDetailComponent},
    {
     path:'', redirectTo:'list', pathMatch:'full'   
    }
];
