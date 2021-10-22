import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';


@NgModule ({
 imports : [
  BrowserModule
 ],
 declarations : [
  AppComponent,
  FooterComponent,
  HeaderComponent
 ],
 providers : [

 ],
 bootstrap : [
 AppComponent
 ]

})

export class AppModule{

}