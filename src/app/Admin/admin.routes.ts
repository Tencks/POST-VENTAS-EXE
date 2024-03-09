import { Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin-Layout/admin-home/admin-home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

export const ADMIN_ROUTES: Routes = [
    {path:'layout', component:DashboardComponent},
    {path:'home', component:AdminHomeComponent},
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
];
