import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { UserFormService } from '../../../../services/user-form.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-form-inputs',
  imports: [ReactiveFormsModule,InputTextModule, InputMaskModule, ToggleSwitchModule, SelectModule, IconFieldModule, InputIconModule, MessageModule],
  templateUrl: './form-inputs.html',
  styleUrl: './form-inputs.scss'
})
export class FormInputs {
  constructor(public userFormService: UserFormService) {
  }

}
