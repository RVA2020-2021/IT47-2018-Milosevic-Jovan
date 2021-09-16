import { NationalityComponent } from './components/nationality/nationality.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { LeagueComponent } from './components/league/league.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'author',
    component: AuthorComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'leagues',
    component: LeagueComponent
  }, {
    path: 'teams',
    component: TeamComponent
  }, {
    path: 'players',
    component: PlayerComponent
  }, {
    path: 'nationalities',
    component: NationalityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
