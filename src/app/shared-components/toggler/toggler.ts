import { Component } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-toggler',
  imports: [ToggleSwitchModule],
  templateUrl: './toggler.html',
  styleUrl: './toggler.scss',
})
export class Toggler {}
