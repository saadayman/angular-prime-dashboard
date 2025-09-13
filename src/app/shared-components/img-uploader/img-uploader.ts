import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'file-upload',
  templateUrl: './img-uploader.html',
  imports: [CommonModule, ButtonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor {
  files: any[] = [];
  selectedFile: File | null = null;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file size (5MB limit to match backend)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Create object URL for preview
      const fileWithUrl = {
        ...file,
        objectURL: URL.createObjectURL(file),
      };

      this.files = [fileWithUrl];
      this.selectedFile = file;

      // Pass the actual File object to the form, not the array
      this.onChange(file);
      this.onTouched();
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.files = value;
    } else {
      this.files = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
