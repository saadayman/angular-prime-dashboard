import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserFormService } from '../../../services/user-form.service';
import { BackButtonDirective } from '../../../../../../libs/global/directives/back-button.directive';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-page-header',
  imports: [ButtonModule, BackButtonDirective, Toast],
  templateUrl: './user-page-header.html',
  styleUrl: './user-page-header.scss',
  providers: [MessageService],
})
export class UserPageHeader {
  isSaving = false;

  constructor(
    public userFormService: UserFormService,
    private messageService: MessageService,
    private location: Location
  ) {}

  cancel() {
    this.userFormService.userForm.reset();
    this.location.back();
  }

  saveUser() {
    if (this.isSaving) return;

    this.isSaving = true;

    this.userFormService.saveUser().subscribe({
      next: (response) => {
        this.isSaving = false;

        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User created successfully',
          });

          this.userFormService.userForm.reset();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.message || 'Failed to create user',
          });
        }
      },
      error: (error) => {
        this.isSaving = false;
        console.error('Error creating user:', error);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error?.message || 'Failed to create user',
        });
      },
    });
  }
}
