import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full', },
  {path: 'landing', component: LandingComponent, data: {depth: 1}},
  {path: 'home', component: HomeComponent, data: {depth: 2}}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{enableTracing: false}),
    HttpModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
