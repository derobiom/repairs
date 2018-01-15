import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@app/core/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toolbarSvc: ToolbarService) { }

  ngOnInit() {
    this.toolbarSvc.itemSelected.subscribe(
      (item: string)=>{ console.log("thanks for " + item)}
    );
  }

}
