import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { GetBeerComponent } from './get-beer/get-beer.component';
import { AllBeersComponent } from './all-beers/all-beers.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { BeersAbvComponent } from './beers-abv/beers-abv.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'beer', component: RandomBeerComponent },
  { path: 'get-beer', component: GetBeerComponent },
  { path: 'beers', component: AllBeersComponent },
  { path: 'beer/:id', component: BeerInfoComponent },
  { path: 'beers/abv/:abv', component: BeersAbvComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomBeerComponent,
    GetBeerComponent,
    AllBeersComponent,
    BeerInfoComponent,
    BeersAbvComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
