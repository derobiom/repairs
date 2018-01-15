import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomersToolbarComponent } from './customers-toolbar/customers-toolbar.component';

const routes: Routes = [
    {path: '', component: CustomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

          ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
