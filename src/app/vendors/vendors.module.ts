import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@app/shared';
import { VendorsRoutingModule } from './vendors-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVendorComponent } from './editvendor/editvendor.component';
import { VendorListComponent } from './vendorlist/vendorlist.component';

@NgModule({
  imports: [
    CommonModule,
    VendorsRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditVendorComponent,
    VendorListComponent
  ],
  entryComponents: [
  ]
})
export class VendorsModule {

}
