import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  imports: [InputIcon, IconField, InputTextModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {}
