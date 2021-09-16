import { Team } from './../../models/team';
import { LeagueService } from './../../services/league.service';
import { TeamService } from './../../services/team.service';
import { League } from './../../models/league';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit, OnDestroy {

  public flag: number;

  public leagues: League[];
  public subscription: Subscription;

  constructor(private teamService: TeamService,
    private leagueService: LeagueService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: Team) { }

  ngOnInit(): void {
    this.subscription = this.leagueService.getAllLeagues().subscribe(data => {
      this.leagues = data;
    }), (error: Error) => {
      console.log(error);
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  compareTo(a, b) {
    return a.id==b.id;
  }

  public addTeam(): void {
    this.teamService.addTeam(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name }} is successfully added.`, 'Ok', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'Ok', {duration: 2500});
    };
  }

  public updateTeam(): void {
    this.teamService.updateTeam(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully updated.`, 'Ok', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'Ok', {duration: 2500});
    };
  }

  public deleteTeam(): void {
    this.teamService.deleteTeam(this.dataDialog.id).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully deleted.`, 'Ok', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'Ok', {duration: 2500});
    };
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
