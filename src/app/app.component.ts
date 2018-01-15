import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@app/core/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shownav: boolean = false;
 
  constructor(private toolbarSvc: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarSvc.menuSelected.subscribe(
      ()=>{
        this.shownav = !this.shownav;
      } 
    );
  }

}
