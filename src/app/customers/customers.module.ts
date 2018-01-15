import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { CustomersRoutingModule } from './customers-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersComponent } from './customers/customers.component';
import { CustomersToolbarComponent } from './customers-toolbar/customers-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    CustomersToolbarComponent,
    CustomersComponent
  ]
})
export class CustomersModule { }
