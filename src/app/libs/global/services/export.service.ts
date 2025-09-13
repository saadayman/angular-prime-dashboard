import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ExportService {
  activeTablesData : any[] = [];
  constructor() {

  }
  public setActiveTablesData(data: any[]) {
    this.activeTablesData = [...this.activeTablesData, ...data];
  }
  public exportTablesCSV() {
    // we can show a modal that allow user to seelct which tables to export then implement export functionality
    console.log('exportCSV', this.activeTablesData);
  }
}
