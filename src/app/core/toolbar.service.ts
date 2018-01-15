import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ToolbarService {
  itemSelected = new EventEmitter<string>();
  menuSelected = new EventEmitter();
  
  constructor() { }

}
