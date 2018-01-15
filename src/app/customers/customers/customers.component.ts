import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToolbarService } from '@app/core/toolbar.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  constructor(private toolbarSvc: ToolbarService) { }
 
displayedColumns = ['CustomerNumber', 'QuickCode', 'CustomerName','ContactName','BusinessPhone','Reference1',
'Reference2','HomePhone','MobilePhone','Fax','Address','City','ProvinceState','PostalZipCode','Country','BillingNumber',
'BillingName','Billable','Advertising','Status'];
exampleDatabase = new ExampleDatabase();
dataSource: ExampleDataSource | null;

@ViewChild('filter') filter: ElementRef;

ngOnInit() {
  this.dataSource = new ExampleDataSource(this.exampleDatabase);
  Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export interface CustomerData 
{
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

const CustomerNames = ['Freds Big Box', 'Joes Big Box', 'Dome Hepot', 'SmallMart', 'PMart', 'Little Buy', 'Lowles',
  'Tarjet', 'Mosco', 'Gogers', 'Great Buy', 'Wrong Aid', 'Tracys', 'Mohls', 'Narbucks'];

const Cities = ['Pittsburgh', 'Toledo', 'San Antonio', 'Dallas', 'Fort Worth', 'Lubbock', 'Abiliene',
  'Oak Brook', 'Austin', 'Chicago', 'Cleveland', 'El Paso', 'New York', 'Boston', 'Altoona'];

const States = ['PA', 'NY', 'MN', 'CA', 'IN', 'LA', 'TX',
  'MC', 'NC', 'FL', 'GA', 'OK', 'NV', 'AZ', 'WA'];


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CustomerData[]> = new BehaviorSubject<CustomerData[]>([]);
  get data(): CustomerData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {

    return {
      Loc: Math.round((Math.random() * 100)).toString(),
      CustomerNumber: Math.round((Math.random() * 10000)).toString(),
      QuickCode: "1",
      CustomerName: CustomerNames[Math.round(Math.random() * (CustomerNames.length - 1))],
      Reference1: "Ref 1",
      Reference2: "Ref 2",
      ContactName: "Buyer 1",
      BusinessPhone: "555-555-1212",
      HomePhone: "555-555-1212",
      MobilePhone: "555-555-1212",
      Fax: "555-555-1212",
      Address: "111 Main St",
      City: Cities[Math.round(Math.random() * (CustomerNames.length - 1))],
      ProvinceState: States[Math.round(Math.random() * (CustomerNames.length - 1))],
      PostalZipCode: "99999",
      Country: "USA",
      BillingNumber: Math.round((Math.random() * 100)).toString(),
      BillingName: "Accounts Payable",
      Billable: "Yes",
      Advertising: "Huh",
      Status: "Active"
    };
  }

}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CustomerData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: CustomerData) => {
        let searchStr = (item.CustomerNumber + item.CustomerName).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}
