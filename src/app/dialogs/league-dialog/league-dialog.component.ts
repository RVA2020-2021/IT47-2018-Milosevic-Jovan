import { League } from './../../models/league';
import { LeagueService } from './../../services/league.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-league-dialog',
  templateUrl: './league-dialog.component.html',
  styleUrls: ['./league-dialog.component.scss']
})
export class LeagueDialogComponent implements OnInit {

  public flag: number;

  constructor(public leagueService: LeagueService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LeagueDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dataDialog: League) { }

  ngOnInit(): void {
  }

  public addLeague(): void {
    this.leagueService.addLeague(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully added.`, 'Ok', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'Ok', {duration: 2500});
    };
  }

  public updateLeague(): void {
    this.leagueService.updateLeague(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully updated.`, 'Ok', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'Ok', {duration: 2500});
    };
  }

  public deleteLeague(): void {
    this.leagueService.deleteLeague(this.dataDialog.id).subscribe(() => {
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
