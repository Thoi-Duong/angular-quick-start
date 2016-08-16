import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search.component';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService }  from './hero.service';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule ],
  declarations: [HeroSearchComponent, HeroDetailComponent, DashboardComponent, HeroesComponent, AppComponent ],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
