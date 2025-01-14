import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker'; 

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule,NgxMatTimepickerModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  @Input() formConfig: any;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DynamicFormComponent>
  ) {
    this.formConfig = data.formConfig;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const formControls: { [key: string]: any[] } = {};
    this.formConfig.fields.forEach((field: any) => {
      formControls[field.name] = [field.value || '', field.validators || []];
    });
    this.formGroup = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
      this.dialogRef.close(this.formGroup.value);
    }
  }

  onCancel() {
    this.formGroup.reset();
  }

  onDialogClose() {
    this.dialogRef.close();
  }
}
