import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ApirequestService } from './apirequest.service';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApirequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
