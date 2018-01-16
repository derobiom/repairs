import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerlistComponent } from '@app/customers/customerlist/customerlist.component';

const routes: Routes = [
    {path: '', component: CustomerlistComponent },
    {path: 'edit', component: EditcustomerComponent },
    {path: 'list', component: CustomerlistComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

          ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
