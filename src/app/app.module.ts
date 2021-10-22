import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/search.component';
import { QuickSearchComponent } from './Home/quickSearch.component';


@NgModule ({
 imports : [
  BrowserModule
 ],
 declarations : [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  SearchComponent,
  QuickSearchComponent
 ],
 
 providers : [

 ],
 bootstrap : [
 AppComponent
 ]

})

export class AppModule{

}