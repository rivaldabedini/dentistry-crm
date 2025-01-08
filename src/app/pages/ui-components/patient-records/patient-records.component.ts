import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { AppTablesComponent, ColumnDefinition } from '../tables/tables.component';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}


const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 180,
    priority: 'confirmed',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    budget: 90,
    priority: 'cancelled',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'PlayStation 5 DualSense Wireless Controller',
    budget: 120,
    priority: 'rejected',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
    budget: 160,
    priority: 'confirmed',
  },
];


@Component({
  selector: 'app-patient-records',
  standalone: true,
  imports: [CommonModule, MaterialModule,AppTablesComponent],
  templateUrl: './patient-records.component.html',
  styleUrl: './patient-records.component.scss',
})
export class PatientRecordsComponent implements OnInit {

  ngOnInit() {
  }

  patients = [
    {
      patientId: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date(1990, 5, 15).toUTCString(),
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield',
      dateCreated: new Date(),
    },
    {
      patientId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: new Date(1985, 8, 24),
      gender: 'Female',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St, Shelbyville',
      dateCreated: new Date(),
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
      this.addPatient();
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
}
