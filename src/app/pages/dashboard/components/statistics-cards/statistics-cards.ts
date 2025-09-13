import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { CircularProgressComponent } from '../../../../shared-components/circular-progress/circular-progress';

@Component({
  selector: 'app-statistics-cards',
  imports: [ProgressBarModule, CardModule, CommonModule, CircularProgressComponent],
  templateUrl: './statistics-cards.html',
  styleUrl: './statistics-cards.scss',
})
export class StatisticsCards {
  statisticsCards: any[] = [
    {
      title: 'Active Trips',
      current: 100,
      total: 302,
      type: 'progress',
      color: '#00C5D6',
    },
    {
      title: 'Active Vehicles',
      current: 375,
      total: 500,
      type: 'progress',
      color: '#00C5D6',
    },
    {
      title: 'Under Maintenance',
      current: 16,
      total: 20,
      type: 'progress',
      color: '#00C5D6',
    },
    {
      title: 'In-Active Trips',
      value: 2,
      type: 'number',
      color: '#FFFFFF',
    },
    {
      title: 'Stopped Vehicles',
      value: 100,
      type: 'number',
      color: '#FFFFFF',
    },
    {
      title: 'Queue Maintenance',
      value: 4,
      type: 'number',
      color: '#FFFFFF',
    },
    {
      title: 'Total Departments',
      value: 7,
      type: 'number',
      color: '#FFFFFF',
    },
    {
      title: 'Total Fleets',
      value: 60,
      type: 'number',
      color: '#FFFFFF',
    },
    {
      title: 'Total Drivers',
      value: 300,
      type: 'number',
      color: '#FFFFFF',
    },
  ].map((card: any) => ({
    ...card,
    percentage:
      card.type === 'progress' ? ((card['current'] / card['total']) * 100).toFixed(0) : undefined,
  })) as any[];
}
