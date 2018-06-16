import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";

import { WhiteBoardComponent } from './white-board/white-board.component';

import {routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from "./services/user.service.client";
import { SearchListComponent } from './search-list/search-list.component';
import {SearchServiceClient} from "./services/search.service.client";
import {HttpModule} from "@angular/http";
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchListComponent,
    CategorySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserServiceClient,
    SearchServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
