import { LeagueDialogComponent } from './../../dialogs/league-dialog/league-dialog.component';
import { LeagueService } from './../../services/league.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { League } from 'src/app/models/league';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit, OnDestroy {

  columns = ['id', 'name', 'label', 'action'];
  dataSource: MatTableDataSource<League>;
  subscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(private leagueService: LeagueService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.leagueService.getAllLeagues().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }), (error: Error) => {
      console.log(error);
    }
  }

  public openDialog(flag: number, id?: number, name?: string, label?: string) {
    const dialogRef = this.dialog.open(LeagueDialogComponent, { data: { id, name, label } });
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
