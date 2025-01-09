import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import {
  AppTablesComponent,
  ColumnDefinition,
} from '../tables/tables.component';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-patient-records',
  standalone: true,
  imports: [CommonModule, MaterialModule, AppTablesComponent],
  templateUrl: './patient-records.component.html',
  styleUrl: './patient-records.component.scss',
})
export class PatientRecordsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  patients = [
    {
      patientId: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: format(new Date(1985, 8, 24), 'yyyy-MM-dd'),
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield',
      dateCreated: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      patientId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: format(new Date(1985, 8, 24), 'yyyy-MM-dd'),
      gender: 'Female',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St, Shelbyville',
      dateCreated: format(new Date(), 'yyyy-MM-dd'),
    },
  ];

  // Column configuration
  columns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'dateOfBirth', label: 'Date of Birth' },
    { key: 'gender', label: 'Gender' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Address' },
    { key: 'dateCreated', label: 'Date Created' },
  ];

  // Actions configuration
  actions = [
    { key: 'edit', label: 'Edit', icon: 'edit' },
    { key: 'delete', label: 'Delete', icon: 'delete' },
  ];

  // Handle actions from the table
  onTableAction(event: { action: string; row: any }): void {
    const { action, row } = event;
    if (action === 'add') {
      this.openAddPatientModal();
    } else if (action === 'edit') {
      this.editPatient(row);
    } else if (action === 'delete') {
      this.deletePatient(row);
    }
  }
  addPatient(): void {
    console.log('Adding patient');
  }

  editPatient(patient: any): void {
    console.log('Editing patient:', patient);
    // Add logic to open an edit form or navigate to an edit page
  }

  deletePatient(patient: any): void {
    console.log('Deleting patient:', patient);
    // Add logic to confirm and delete the patient
  }
  formConfig = {
    title: 'Dynamic Form Example',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter first name',
        class: 'col-lg-6',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        class: 'col-lg-6',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        class: 'col-lg-6',
      },
      {
        name: 'age',
        label: 'Age',
        type: 'number',
        placeholder: 'Enter your age',
        class: 'col-lg-6',
      },
      {
        name: 'birthDate',
        label: 'Date of Birth',
        type: 'date',
        placeholder: 'Select your birth date',
        class: 'col-lg-6',
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { value: 'Male', viewValue: 'Male' },
          { value: 'Female', viewValue: 'Female' },
          { value: 'Other', viewValue: 'Other' },
        ],
        class: 'col-lg-6',
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { value: 'us', viewValue: 'United States' },
          { value: 'in', viewValue: 'India' },
          { value: 'uk', viewValue: 'United Kingdom' },
        ],
        class: 'col-lg-6',
      },
      {
        name: 'hobbies',
        label: 'Hobbies',
        type: 'checkbox',
        class: 'col-lg-6',
      },
      {
        name: 'comments',
        label: 'Additional Comments',
        type: 'textarea',
        placeholder: 'Enter your comments here',
        class: 'col-lg-12',
      },
    ],
  };
  openAddPatientModal(): void {
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '800px',
      data: { formConfig: this.formConfig },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }
}
