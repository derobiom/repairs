import { Component, OnInit } from '@angular/core';
import { ToolbarService }  from '@app/core/toolbar.service';

@Component({
  selector: 'customers-toolbar',
  templateUrl: './customers-toolbar.component.html',
  styleUrls: ['./customers-toolbar.component.scss']
})
export class CustomersToolbarComponent implements OnInit {

  constructor(private toolbarSvc: ToolbarService) { }

  ngOnInit() {
  }
  
  tbClicked(event){
    this.toolbarSvc.itemSelected.emit(event.target.attributes.id.value);
  }
  
}
