import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@app/shared';
import { CustomersRoutingModule } from './customers-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditcustomerComponent,
    CustomerlistComponent
  ],
  entryComponents: [
  ]
})
export class CustomersModule {

}
