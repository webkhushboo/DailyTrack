// Core modules
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**
 * Generic table
 */
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnChanges {

  @Input() columns = [];
  @Input() dataSource;
  @Input() pageSize;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns = [];

  /**
   * Life cycle on changes event
   */
  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.displayedColumns = this.columns.map((column) => column.columnDef);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
