import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditVendorComponent } from './editvendor/editvendor.component';
import { VendorListComponent } from '@app/vendors/vendorlist/vendorlist.component';

const routes: Routes = [
    {path: '', component: VendorListComponent },
    {path: 'edit', component: EditVendorComponent },
    {path: 'list', component: VendorListComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

          ],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
