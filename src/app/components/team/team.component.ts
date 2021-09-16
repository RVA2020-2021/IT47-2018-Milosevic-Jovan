import { League } from './../../models/league';
import { TeamService } from './../../services/team.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/models/team';
import { MatDialog } from '@angular/material/dialog';
import { TeamDialogComponent } from 'src/app/dialogs/team-dialog/team-dialog.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  columns = ['id', 'foundingDate', 'name', 'place', 'league', 'action'];
  dataSource: MatTableDataSource<Team>;
  subscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private teamService: TeamService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.teamService.getAllTeams().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }), (error: Error) => {
      console.log(error);
    }
  }

  public openDialog(flag: number, id?: number, foundingDate?: Date, name?: string, place?: string, league?: League) {
    const dialogRef = this.dialog.open(TeamDialogComponent, { data: { id, foundingDate, name, place, league } });
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
