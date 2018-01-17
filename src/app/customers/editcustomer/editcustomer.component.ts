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
  balanceDataSource = new MatTableDataSource<BalanceData>(BALANCE_DATA);
  balancedueColumns = ['Balance', 'Total', 'Thirty', 'Sixty','Ninety','Over'];
  statsDataSource = new MatTableDataSource<StatsData>(STATS_DATA);
  statsColumns = ['Stat', 'MTD', 'YTD', 'LastYear','YearBeforeLast'];
  contact: ContactData;

  constructor(private toolbarSvc: ToolbarService) { 
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

export interface BalanceData {
  Balance: string;
  Total: string;
  Thirty: string;
  Sixty: string;
  Ninety: string;
  Over: string;
}

export interface StatsData {
  Stat: string;
  MTD: string;
  YTD: string;
  LastYear: string;
  YearBeforeLast: string;
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

const STATS_DATA: StatsData[] = [
{Stat: "Repair Orders Pending",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Repair Orders Repaired",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Repair Orders Refused",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Repair Invoices Billed",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Repair Invoices Revenue",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Sales Invoices Processed",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Sales Invoices Billed",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Sales Invoices Revenue",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Credit Notes Processed",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Credit Notes Billed",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
{Stat: "Amount Credited",MTD: "22",YTD: "33",LastYear: "111",YearBeforeLast: "222"},
];

const BALANCE_DATA: BalanceData[] = [
  {
    Balance: "Repair Invoices",
    Total: "66",
    Thirty: "77",
    Sixty: "88",
    Ninety: "99",
    Over: "1",
   },
   {
    Balance: "Sales Invoices",
    Total: "66",
    Thirty: "77",
    Sixty: "88",
    Ninety: "99",
    Over: "1",
   },
   {
    Balance: "Credit Notes",
    Total: "66",
    Thirty: "77",
    Sixty: "88",
    Ninety: "99",
    Over: "1",
   },
   {
    Balance: "Total Balance",
    Total: "662",
    Thirty: "772",
    Sixty: "882",
    Ninety: "992",
    Over: "11",
   },

];





