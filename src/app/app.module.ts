import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDataService } from "app/user-data.service";
import { SalutationService } from "app/salutation.service";
import { LoggerService } from "app/logger.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalutationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
