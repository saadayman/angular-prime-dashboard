import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ExportService } from '../../../../libs/global/services/export.service';

@Component({
  selector: 'app-importandexport',
  imports: [ButtonModule],
  templateUrl: './importandexport.html',
  styleUrl: './importandexport.scss',
})
export class Importandexport {
  constructor(private exportSerivce: ExportService) {}
  exportCSV() {
    this.exportSerivce.exportTablesCSV();
  }
  importCSV(event: any) {
    console.log('importCSV');
  }
}
