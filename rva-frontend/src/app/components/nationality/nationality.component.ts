import { NationalityService } from './../../services/nationality.service';
import { NationalityDialogComponent } from './../../dialogs/nationality-dialog/nationality-dialog.component';
import { Nationality } from './../../models/nationality';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.scss']
})
export class NationalityComponent implements OnInit, OnDestroy {

  columns = ['id', 'name', 'abbreviation', 'action'];
  dataSource: MatTableDataSource<Nationality>;
  subscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private nationalityService: NationalityService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.nationalityService.getAllNationalities().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }), (error: Error) => {
      console.log(error);
    }
  }

  public openDialog(flag: number, id?: number, name?: string, abbreviation?: string) {
    const dialogRef = this.dialog.open(NationalityDialogComponent, { data: { id, name, abbreviation } });
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.loadData();
      }
    })
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
