import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { ToolbarService } from '@app/core/toolbar.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['select', 'CustomerNumber', 'QuickCode', 'CustomerName','ContactName','BusinessPhone','Reference1',
  'Reference2','HomePhone','MobilePhone','Fax','Address','City','ProvinceState','PostalZipCode','Country','BillingNumber',
  'BillingName','Billable','Advertising','Status'];
  tableDataSource = new MatTableDataSource<CustomerData>(CUSTOMER_DATA);
  selection = new SelectionModel<CustomerData>(true, []);
  customer: CustomerData;

  constructor(private toolbarSvc: ToolbarService, public dialog: MatDialog) { 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.tableDataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.tableDataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.tableDataSource.paginator = this.paginator; 
    this.tableDataSource.sort = this.sort;
  }

}

export interface CustomerData {
  Loc: string;
  CustomerNumber: string;
  QuickCode: string;
  CustomerName: string;
  Reference1: string;
  Reference2: string;
  ContactName: string;
  BusinessPhone: string;
  HomePhone: string;
  MobilePhone: string;
  Fax: string;
  Address: string;
  City: string; 
  ProvinceState: string;
  PostalZipCode: string;
  Country: string;
  BillingNumber: string;
  BillingName: string;
  Billable: string;
  Advertising: string;
  Status: string;
}

const CUSTOMER_DATA: CustomerData[] = [
  {Loc: "1", CustomerNumber: "1", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "2", QuickCode: "1", CustomerName: "Sams",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "3", QuickCode: "1", CustomerName: "Teds",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "4", QuickCode: "1", CustomerName: "Mikes",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "5", QuickCode: "1", CustomerName: "Bobs",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "6", QuickCode: "1", CustomerName: "Sallys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "7", QuickCode: "1", CustomerName: "Marys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "8", QuickCode: "1", CustomerName: "Jesuses",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "9", QuickCode: "1", CustomerName: "Elmiras",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "10", QuickCode: "1", CustomerName: "Garys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "11", QuickCode: "1", CustomerName: "Robs",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "12", QuickCode: "1", CustomerName: "JoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "13", QuickCode: "1", CustomerName: "NoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "14", QuickCode: "1", CustomerName: "NewMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "15", QuickCode: "1", CustomerName: "DoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "16", QuickCode: "1", CustomerName: "BigBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "17", QuickCode: "1", CustomerName: "LittleBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", CustomerNumber: "18", QuickCode: "1", CustomerName: "MediumBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },  
 {Loc: "1", CustomerNumber: "19", QuickCode: "1", CustomerName: "WowBox",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "20", QuickCode: "1", CustomerName: "Jooos",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "21", QuickCode: "1", CustomerName: "Mooos",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "22", QuickCode: "1", CustomerName: "Burgs",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "23", QuickCode: "1", CustomerName: "Kimballs",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "24", QuickCode: "1", CustomerName: "pakdhfd",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "25", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "26", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "27", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "28", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "29", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "30", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "31", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "32", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "33", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "34", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "35", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", CustomerNumber: "36", QuickCode: "1", CustomerName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
];

