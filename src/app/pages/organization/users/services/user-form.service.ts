import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  public userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.userForm = this.fb.group({
      user_image: [''],
      first_name: ['', [Validators.required]],
      middle_name: [''],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      active_rfid: [false],
      rfid_number: [''],
      role: ['', [Validators.required]],
      department: ['', [Validators.required]],
      fleet: ['', [Validators.required]],
    });
  }
  public roles = [
    { label: 'SuperAdmin', value: 'admin' },
    { label: 'User', value: 'user' },
  ];
  public departments = [{ label: 'Fire Fighters', value: 'admin' }];
  public fleets = [
    { label: 'Fleet 1', value: 'fleet1' },
    { label: 'Fleet 2', value: 'fleet2' },
  ];
  saveUser(): Observable<any> {
    const formValue = this.userForm.value;

    if (formValue.user_image && formValue.user_image instanceof File) {
      return this.apiService.uploadImage(formValue.user_image).pipe(
        switchMap((uploadResponse) => {
          if (uploadResponse.success) {
            const userData = {
              ...formValue,
              user_image: uploadResponse.data.url,
            };
            return this.apiService.createUser(userData);
          } else {
            throw new Error('Failed to upload image');
          }
        })
      );
    } else {
      return this.apiService.createUser(formValue);
    }
  }
}
