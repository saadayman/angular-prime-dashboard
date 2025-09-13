import { Component } from '@angular/core';
import { StatisticsCards } from './components/statistics-cards/statistics-cards';
import { DividerModule } from 'primeng/divider';
import * as SharedComponents from '../../shared-components';
import { Search } from './components/search/search';
import { Importandexport } from './components/importandexport/importandexport';
@Component({
  selector: 'app-dashboard',
  imports: [StatisticsCards, DividerModule, SharedComponents.AppTable, Search, Importandexport],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
