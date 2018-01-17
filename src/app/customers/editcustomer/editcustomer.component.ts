import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@app/core/toolbar.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss']
})
export class EditcustomerComponent implements OnInit {
  displayedColumns = ['ContactName', 'Title'];//, 'BusinessPhone', 'MobilePhone','Fax','Email'
  contactsDataSource = new MatTableDataSource<ContactData>(CONTACT_DATA);
  contact: ContactData;

  constructor() { 
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){

  }

  

}

export interface ContactData {
  ContactName: string;
  Title: string;
  BusinessPhone: string;
  MobilePhone: string;
  Fax: string;
  Email: string;
}


const CONTACT_DATA: ContactData[] = [
  {
    ContactName: "Joe",
    Title: "Mgr",
    BusinessPhone: "555-555-1212",
    MobilePhone: "555-555-1212",
    Fax: "555-555-1212",
    Email: "jshmoe@gmailxyz.com"
   },
   {
    ContactName: "Passy",
    Title: "AP",
    BusinessPhone: "555-555-1212",
    MobilePhone: "555-555-1212",
    Fax: "555-555-1212",
    Email: "pshmoe@gmailxyz.com"
   },

];





