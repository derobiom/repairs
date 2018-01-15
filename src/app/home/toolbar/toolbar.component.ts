import { Component, OnInit } from '@angular/core';
import { ToolbarService }  from '@app/core/toolbar.service';

@Component({
  selector: 'home-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarSvc: ToolbarService) { }

  ngOnInit() {
  }
  
  tbClicked(event){
    this.toolbarSvc.itemSelected.emit(event.target.attributes.id.value);
  }
  
}
