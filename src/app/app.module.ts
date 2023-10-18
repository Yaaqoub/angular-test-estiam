import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserService } from "./user/user.service";
import { UserViewComponent } from './user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
