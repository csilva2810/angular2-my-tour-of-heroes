import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// app root directory
import { AppComponent } from './app.component';
// app hero directory
import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
// app dashboard directory
import { DashboardComponent } from './dashboard/dashboard.component';

// configuring app routes
const ROUTES: Routes = [
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
