import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormService } from '../services/user-form.service';
import { FileUploadComponent } from '../../../../shared-components/img-uploader/img-uploader';
import { UserPageHeader } from './components/user-page-header/user-page-header';
import { FormInputs } from './components/form-inputs/form-inputs/form-inputs';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, FileUploadComponent, UserPageHeader, FormInputs],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userFormService = inject(UserFormService);
  constructor() {}
}
