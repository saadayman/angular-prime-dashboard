import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ColumnConfig } from '../types/table.types';
import { ExportService } from '../../../libs/global/services/export.service';

@Component({
  selector: 'app-table',
  templateUrl: 'tables.html',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, ChipModule],
})
export class AppTable implements OnInit {
  // TODO i will convert this inputs to a single object for better use
  @Input() data: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() loading: boolean = false;
  @Input() paginator: boolean = false;
  @Input() rows: number = 10;
  @Input() scrollable: boolean = true;
  @Input() scrollHeight: string = '400px';
  @Input() resizableColumns: boolean = true;
  @Input() reorderableColumns: boolean = true;
  @Input() tableCaption: string = 'Table';
  @Input() tableCaptionDescription: string = '12:00 PM - 08:00 PM';
  @Input() tableCaptionIcon: string = 'pi pi-chart-bar';
  @Input() isImage: boolean = false;

  defaultColumns: ColumnConfig[] = [
    { field: 'id', header: 'Id', sortable: true, width: '100px', type: 'text' },
    {
      field: 'vehicle',
      header: 'Vehicle',
      sortable: true,
      sortableField: 'vehicle.id',
      width: '270px',
      type: 'badge',
    },
    { field: 'plateNum', header: 'Plate Num.', sortable: false, width: '126px', type: 'text' },
    { field: 'odometer', header: 'Odometer', sortable: false, width: '126px', type: 'text' },
    { field: 'gps', header: 'GPS', sortable: false, width: '180px', type: 'text' },
    {
      field: 'device',
      header: 'Device',
      sortableField: 'device.name',
      sortable: true,
      width: '126px',
      type: 'icon',
      isImage: true,
    },
    { field: 'sim', header: 'SIM', sortable: false, width: '126px', type: 'text' },
    { field: 'fleet', header: 'Fleet', sortable: false, width: '215px', type: 'text' },
    { field: 'status', header: 'Status', sortable: false, width: '135px', type: 'select' },
  ];

  sampleData: any[] = [
    {
      id: 1000,
      vehicle: { type: 'SUV', id: 'Bus-9267' },
      plateNum: '04321',
      odometer: '55,956 KM',
      gps: '3-Nov-2024 13:05:50',
      device: { name: 'Teltonika', id: 'C03-96321', icon: 'thunder.svg', isImage: true },
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      id: 1001,
      vehicle: { type: 'SUV', id: 'Bus-9265' },
      plateNum: '04321',
      odometer: '55,956 KM',
      gps: '3-Nov-2024 13:05:50',
      device: { name: 'Teltonika', id: 'C03-96321', icon: 'thunder.svg', isImage: true },
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      id: 1002,
      vehicle: { type: 'SUV', id: 'Bus-9265' },
      plateNum: '04321',
      odometer: '55,956 KM',
      gps: '3-Nov-2024 13:05:50',
      device: { name: 'Teltonika', id: 'C03-96321', icon: 'thunder.svg', isImage: true },
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      id: 1003,
      vehicle: { type: 'SUV', id: 'Bus-9265' },
      plateNum: '04321',
      odometer: '55,956 KM',
      gps: '3-Nov-2024 13:05:50',
      device: { name: 'Teltonika', id: 'C03-96321', icon: 'thunder.svg', isImage: true },
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
  ];
  constructor(public exportService: ExportService) {}

  ngOnInit() {
    // this.exportService.setActiveTablesData(this.data);

    if (this.columns.length === 0) {
      // Only for task
      this.columns = this.defaultColumns;
    }

    if (this.data.length === 0) {
      this.data = this.sampleData;
    }
  }

  getValue(row: any, field: string): any {
    return field.split('.').reduce((obj, key) => obj?.[key], row);
  }
}
