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
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['select', 'vendorNumber', 'QuickCode', 'vendorName','ContactName','BusinessPhone','Reference1',
  'Reference2','HomePhone','MobilePhone','Fax','Address','City','ProvinceState','PostalZipCode','Country','BillingNumber',
  'BillingName','Billable','Advertising','Status'];
  tableDataSource = new MatTableDataSource<VendorData>(VENDOR_DATA);
  selection = new SelectionModel<VendorData>(true, []);
  vendor: VendorData;

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

export interface VendorData {
  Loc: string;
  vendorNumber: string;
  QuickCode: string;
  vendorName: string;
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

const VENDOR_DATA: VendorData[] = [
  {Loc: "1", vendorNumber: "1", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "2", QuickCode: "1", vendorName: "Sams",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "3", QuickCode: "1", vendorName: "Teds",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "4", QuickCode: "1", vendorName: "Mikes",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "5", QuickCode: "1", vendorName: "Bobs",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "6", QuickCode: "1", vendorName: "Sallys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "7", QuickCode: "1", vendorName: "Marys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "8", QuickCode: "1", vendorName: "Jesuses",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "9", QuickCode: "1", vendorName: "Elmiras",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "10", QuickCode: "1", vendorName: "Garys",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "11", QuickCode: "1", vendorName: "Robs",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "12", QuickCode: "1", vendorName: "JoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "13", QuickCode: "1", vendorName: "NoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "14", QuickCode: "1", vendorName: "NewMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "15", QuickCode: "1", vendorName: "DoMart",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "16", QuickCode: "1", vendorName: "BigBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "17", QuickCode: "1", vendorName: "LittleBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
  {Loc: "1", vendorNumber: "18", QuickCode: "1", vendorName: "MediumBox",Reference1: "Ref 1", Reference2: "Ref 2", 
  ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
  Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
  BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },  
 {Loc: "1", vendorNumber: "19", QuickCode: "1", vendorName: "WowBox",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "20", QuickCode: "1", vendorName: "Jooos",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "21", QuickCode: "1", vendorName: "Mooos",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "22", QuickCode: "1", vendorName: "Burgs",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "23", QuickCode: "1", vendorName: "Kimballs",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "24", QuickCode: "1", vendorName: "pakdhfd",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "25", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "26", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "27", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "28", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "29", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "30", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "31", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "32", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "33", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "34", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "35", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
 {Loc: "1", vendorNumber: "36", QuickCode: "1", vendorName: "Joes",Reference1: "Ref 1", Reference2: "Ref 2", 
 ContactName: "Buyer 1", BusinessPhone: "555-555-1212", HomePhone: "555-555-1212", MobilePhone: "555-555-1212", Fax: "555-555-1212", 
 Address: "111 Main St", City: "Pittsburgh",  ProvinceState: "PA", PostalZipCode: "99999", Country: "USA", 
 BillingNumber: "1", BillingName: "Accounts Payable", Billable: "Yes", Advertising: "Huh", Status: "Active" },
];

