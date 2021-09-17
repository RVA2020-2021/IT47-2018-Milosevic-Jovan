import { Player } from './../../models/player';
import { NationalityService } from './../../services/nationality.service';
import { TeamService } from './../../services/team.service';
import { PlayerService } from './../../services/player.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Nationality } from 'src/app/models/nationality';
import { Team } from 'src/app/models/team';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit, OnDestroy {

  public flag: number;

  public nationalities: Nationality[];
  public teams: Team[];
  public nationalitiesSubscription: Subscription;
  public teamsSubscription: Subscription;
  
  constructor(private playerService: PlayerService,
              private teamService: TeamService,
              private nationalityService: NationalityService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<PlayerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dataDialog: Player) { }

  ngOnInit(): void {
    this.nationalitiesSubscription = this.nationalityService.getAllNationalities().subscribe(data => {
      this.nationalities = data;
    }), (error: Error) => {
      console.log(error);
    };
    this.teamsSubscription = this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
    }), (error: Error) => {
      console.log(error);
    };
  }

  ngOnDestroy(): void {
    this.nationalitiesSubscription.unsubscribe();
    this.teamsSubscription.unsubscribe();
  }

  compareTo(a, b) {
    return a.id==b.id;
  }

  public addPlayer(): void {
    this.playerService.addPlayer(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.firstName } ${ this.dataDialog.lastName } is successfully added.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public updatePlayer(): void {
    this.playerService.updatePlayer(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.firstName } ${ this.dataDialog.lastName } is successfully updated.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public deletePlayer(): void {
    this.playerService.deletePlayer(this.dataDialog.id).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.firstName } ${ this.dataDialog.lastName } is successfully deleted.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
