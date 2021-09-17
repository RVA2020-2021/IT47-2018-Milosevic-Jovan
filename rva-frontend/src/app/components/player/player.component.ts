import { environment } from 'src/environments/environment';
import { Team } from './../../models/team';
import { PlayerService } from './../../services/player.service';
import { Player } from './../../models/player';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDialogComponent } from 'src/app/dialogs/player-dialog/player-dialog.component';
import { Nationality } from 'src/app/models/nationality';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  columns = ['id', 'dateOfBirth', 'firstName', 'lastName', 'registrationNumber', 'nationality', 'team', 'action'];
  dataSource: MatTableDataSource<Player>;
  subscription: Subscription;

  searchSubscription: Subscription;
  URL = environment.api_url + "/players";

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private playerService: PlayerService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.searchSubscription!=undefined) {
      this.searchSubscription.unsubscribe();
    }
  }

  public loadData() {
    this.subscription = this.playerService.getAllPlayers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }), (error: Error) => {
      console.log(error);
    }
  }

  public getPlayersByName(firstName: string, lastName: string) {
    this.searchSubscription = this.playerService.getPlayersByName(firstName, lastName).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }), (error: Error) => {
      console.log(error);
    };
  }

  public openDialog(flag: number, id?: number, dateOfBirth?: Date, firstName?: string, lastName?: string, registrationNumber?: string, nationality?: Nationality, team?: Team) {
    const dialogRef = this.dialog.open(PlayerDialogComponent, { data: { id, dateOfBirth, firstName, lastName, registrationNumber, nationality, team } });
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.loadData();
      }
    })
  }

  // Custom filter that uses first and last name to search for players
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    const searchTerms = filterValue.split(" ", 2);
    if (Boolean(filterValue)) { // Ensuring that the filter is not empty
      if (searchTerms.length==1) {
        searchTerms.push(""); // add empty char if last name is not entered
      }
      this.getPlayersByName(searchTerms[0], searchTerms[1])
    } else {
      this.loadData();
    }
  }

}
