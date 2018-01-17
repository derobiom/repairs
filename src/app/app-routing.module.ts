import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'vendors', loadChildren: './vendors/vendors.module#VendorsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
