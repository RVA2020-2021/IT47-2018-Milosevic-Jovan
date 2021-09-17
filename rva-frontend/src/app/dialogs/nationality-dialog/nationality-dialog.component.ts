import { Nationality } from './../../models/nationality';
import { NationalityService } from './../../services/nationality.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nationality-dialog',
  templateUrl: './nationality-dialog.component.html',
  styleUrls: ['./nationality-dialog.component.scss']
})
export class NationalityDialogComponent implements OnInit {

  public flag: number;

  constructor(private nationalityService: NationalityService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NationalityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dataDialog: Nationality) { }

  ngOnInit(): void {
  }

  public addNationality(): void {
    this.nationalityService.addNationality(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully added.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public updateNationality(): void {
    this.nationalityService.updateNationality(this.dataDialog).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully updated.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public deleteNationality(): void {
    this.nationalityService.deleteNationality(this.dataDialog.id).subscribe(() => {
      this.snackBar.open(`${ this.dataDialog.name } is successfully deleted.`, 'OK', {duration: 2500});
    }), (error: Error) => {
      console.log(error);
      this.snackBar.open(`Error: ${ error.name }`, 'OK', {duration: 2500});
    };
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
