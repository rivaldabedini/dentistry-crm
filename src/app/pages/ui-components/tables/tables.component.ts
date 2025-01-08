import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

export interface ColumnDefinition {
  key: string; // Property name in the data
  header: string; // Header text for the column
  cellClass?: string; // Optional custom class for cells
  template?: any; // TemplateRef for rendering custom content
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
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class AppTablesComponent implements OnInit {
  @Input() title: string = '';
  @Input() dataSource: any[] = [];
  @Input() columns: {
    key: string;
    label: string;
    headerClass?: string;
    cellClass?: string;
    cellTemplate?: any;
  }[] = [];
  @Input() actions: { key: string; label: string; icon: string }[] = []; // Dynamic actions with keys, labels, and icons
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() action = new EventEmitter<{ action: string; row: any }>();

  filteredDataSource: MatTableDataSource<any>;
  isSearchActive: boolean = false;

  constructor() {
    // this.filteredDataSource = this.dataSource;
  }
  ngOnInit(): void {
    this.filteredDataSource = new MatTableDataSource(this.dataSource);
  }
  ngAfterViewInit(): void {
    this.filteredDataSource.paginator = this.paginator; // Bind paginator to data source
  }

  // Toggle search input visibility
  toggleSearch(): void {
    this.isSearchActive = true;
  }

  // Close search input
  closeSearch(): void {
    this.isSearchActive = false;
    this.filteredDataSource.filter = ''; // Reset filtered data
  }

  // Real-time search
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.filteredDataSource.filter = inputElement.value.trim().toLowerCase();
  }
  // Trigger any action with its key and row data
  onAction(action: string, row: any): void {
    this.action.emit({ action, row });
  }

  // Include the "actions" column dynamically
  getColumnKeys(): string[] {
    return [...this.columns.map((c) => c.key), 'actions'];
  }
}
