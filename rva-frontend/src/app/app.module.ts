import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/league/league.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { NationalityComponent } from './components/nationality/nationality.component';
import { LeagueDialogComponent } from './dialogs/league-dialog/league-dialog.component';
import { HomeComponent } from './core/home/home.component';
import { AuthorComponent } from './core/author/author.component';
import { AboutComponent } from './core/about/about.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NationalityDialogComponent } from './dialogs/nationality-dialog/nationality-dialog.component';
import { PlayerDialogComponent } from './dialogs/player-dialog/player-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { TeamDialogComponent } from './dialogs/team-dialog/team-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    PlayerComponent,
    TeamComponent,
    NationalityComponent,
    LeagueDialogComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent,
    NationalityDialogComponent,
    PlayerDialogComponent,
    TeamDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
